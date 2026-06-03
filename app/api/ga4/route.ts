// app/api/ga4/route.ts
import { NextResponse } from 'next/server';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

// 環境変数から認証情報を取得
const propertyId = process.env.GA4_PROPERTY_ID;
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
// Vercel等の環境変数で \n がエスケープされてしまう対策
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: clientEmail,
    private_key: privateKey,
  },
});

export async function GET() {
  if (!propertyId || !clientEmail || !privateKey) {
    return NextResponse.json({ error: 'GA4 credentials missing' }, { status: 500 });
  }

  try {
    // 1. 日別の推移データ（直近30日）
    const [trendResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'date' }],
      metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }],
      orderBys: [{ dimension: { dimensionName: 'date' } }],
    });

    // 2. 流入元データ（直近30日）
    const [sourceResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'activeUsers' }],
    });

    // 3. 人気ページランキング（直近30日）
    const [pagesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 10,
    });

    return NextResponse.json({
      trend: trendResponse.rows,
      sources: sourceResponse.rows,
      pages: pagesResponse.rows,
    });

  } catch (error) {
    console.error('GA4 API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch GA4 data' }, { status: 500 });
  }
}