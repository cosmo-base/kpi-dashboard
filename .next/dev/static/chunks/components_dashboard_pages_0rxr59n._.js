(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/dashboard/pages/discord.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Discord",
    ()=>Discord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/chart-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/scrollable-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/line-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$linear$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/linear-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/stacked-bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/donut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const getJSTDate = ()=>new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tokyo"
    }));
const formatDiff = (num)=>{
    if (num > 0) return `+${num.toLocaleString()}`;
    if (num < 0) return num.toLocaleString();
    return "0";
};
function Discord() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSns, setShowSns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Discord.useEffect": ()=>{
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRoX91AuTR9uVSNcCSqr0ir_SIP-6ZtNpOqBHaLEwXDMA99w1Rws-5L7crTpqBY_JqHa-n0Ie4PxWLq/pub?gid=0&single=true&output=csv";
            fetch(csvUrl).then({
                "Discord.useEffect": (response)=>response.text()
            }["Discord.useEffect"]).then({
                "Discord.useEffect": (csvText)=>{
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                        skipEmptyLines: true
                    });
                    const rawData = parsed.data;
                    const headerRowIndex = rawData.findIndex({
                        "Discord.useEffect.headerRowIndex": (row)=>row.includes("参加数")
                    }["Discord.useEffect.headerRowIndex"]);
                    if (headerRowIndex === -1) return;
                    const headers = rawData[headerRowIndex];
                    const monthIdx = headers.indexOf("月");
                    const dayIdx = headers.indexOf("日");
                    const increaseIdx = headers.indexOf("参加増加数");
                    const totalIdx = headers.indexOf("参加数");
                    let xIdx = headers.indexOf("X");
                    if (xIdx === -1) xIdx = headers.indexOf("x");
                    const instagramIdx = headers.indexOf("Instagram");
                    const noteIdx = headers.indexOf("note");
                    const dailyRecords = rawData.slice(headerRowIndex + 1).map({
                        "Discord.useEffect.dailyRecords": (row)=>{
                            const snsTotal = (Number(row[xIdx]) || 0) + (Number(row[instagramIdx]) || 0) + (Number(row[noteIdx]) || 0);
                            // 数値にカンマが含まれている場合を除去してパース
                            const incStr = String(row[increaseIdx] || "").replace(/,/g, "");
                            const totStr = String(row[totalIdx] || "").replace(/,/g, "");
                            return {
                                date: `${row[monthIdx]}/${row[dayIdx]}`,
                                increase: Number(incStr) || 0,
                                total: Number(totStr) || 0,
                                snsTotal: snsTotal
                            };
                        }
                    }["Discord.useEffect.dailyRecords"]).filter({
                        "Discord.useEffect.dailyRecords": (record)=>record.total > 0
                    }["Discord.useEffect.dailyRecords"]);
                    if (dailyRecords.length === 0) return;
                    const latest = dailyRecords[dailyRecords.length - 1];
                    // ★ 連続増加・0人の日数を計算するロジック
                    let consecutiveZeroDays = 0;
                    let consecutiveIncreaseDays = 0;
                    if (dailyRecords.length > 0) {
                        const lastInc = dailyRecords[dailyRecords.length - 1].increase;
                        if (lastInc <= 0) {
                            for(let i = dailyRecords.length - 1; i >= 0; i--){
                                if (dailyRecords[i].increase <= 0) consecutiveZeroDays++;
                                else break;
                            }
                        } else if (lastInc > 0) {
                            for(let i = dailyRecords.length - 1; i >= 0; i--){
                                if (dailyRecords[i].increase > 0) consecutiveIncreaseDays++;
                                else break;
                            }
                        }
                    }
                    const sourceColors = {
                        個別招待: "#38BDF8",
                        HP: "#8B5CF6",
                        X: "#1DA1F2",
                        Instagram: "#E4405F",
                        note: "#41C9B4",
                        YouTube: "#FF0000",
                        "ピーテックス(外部のイベント掲載)": "#F59E0B",
                        パートナー団体: "#22C55E",
                        チラシ: "#EC4899"
                    };
                    const defaultColors = [
                        "#38BDF8",
                        "#8B5CF6",
                        "#22C55E",
                        "#F59E0B",
                        "#EF4444",
                        "#06B6D4"
                    ];
                    let colorIdx = 0;
                    const sourceDistributionRaw = new Map();
                    Object.keys(sourceColors).forEach({
                        "Discord.useEffect": (key)=>sourceDistributionRaw.set(key, 0)
                    }["Discord.useEffect"]);
                    rawData.forEach({
                        "Discord.useEffect": (row)=>{
                            if (row.length > 19 && row[18] !== undefined && row[19] !== undefined) {
                                const name = String(row[18]).trim();
                                const valStr = String(row[19]).replace(/,/g, "").trim();
                                const val = parseInt(valStr, 10);
                                if (name && !isNaN(val) && name !== "流入元" && name !== "項目") sourceDistributionRaw.set(name, val);
                            }
                        }
                    }["Discord.useEffect"]);
                    const sourceDistribution = Array.from(sourceDistributionRaw.entries()).map({
                        "Discord.useEffect.sourceDistribution": ([name, val])=>({
                                name: `${name} (${val})`,
                                value: val,
                                color: sourceColors[name] || defaultColors[colorIdx++ % defaultColors.length]
                            })
                    }["Discord.useEffect.sourceDistribution"]);
                    const nowJst = getJSTDate();
                    const currentY = nowJst.getFullYear();
                    const currentM = nowJst.getMonth() + 1;
                    const currentD = nowJst.getDate();
                    const todayNum = currentY * 10000 + currentM * 100 + currentD;
                    const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
                    const endOfPrevMonthJst = new Date(nowJst.getTime());
                    endOfPrevMonthJst.setDate(0);
                    const endOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + endOfPrevMonthJst.getDate();
                    const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
                    const startOfWeekJst = new Date(nowJst.getTime());
                    startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
                    const startOfWeekNum = startOfWeekJst.getFullYear() * 10000 + (startOfWeekJst.getMonth() + 1) * 100 + startOfWeekJst.getDate();
                    const endOfPrevWeekJst = new Date(startOfWeekJst.getTime());
                    endOfPrevWeekJst.setDate(startOfWeekJst.getDate() - 1);
                    const endOfPrevWeekNum = endOfPrevWeekJst.getFullYear() * 10000 + (endOfPrevWeekJst.getMonth() + 1) * 100 + endOfPrevWeekJst.getDate();
                    let currentYearForDate = currentY;
                    if (dailyRecords.length > 0) {
                        const firstMonth = parseInt(dailyRecords[0].date.split("/")[0], 10);
                        if (firstMonth > currentM + 1) currentYearForDate--;
                    }
                    let prevMonthForDate = -1;
                    const recordsWithDateNum = dailyRecords.map({
                        "Discord.useEffect.recordsWithDateNum": (record)=>{
                            const [mStr, dStr] = record.date.split("/");
                            const m = parseInt(mStr, 10);
                            const d = parseInt(dStr, 10);
                            if (prevMonthForDate !== -1 && prevMonthForDate === 12 && m === 1) currentYearForDate++;
                            prevMonthForDate = m;
                            const recordNum = currentYearForDate * 10000 + m * 100 + d;
                            return {
                                ...record,
                                recordNum
                            };
                        }
                    }["Discord.useEffect.recordsWithDateNum"]);
                    let thisMonthIncrease = 0, thisWeekIncrease = 0, todayIncrease = 0;
                    let endOfPrevMonthTotal = recordsWithDateNum[0]?.total || 0;
                    let endOfPrevWeekTotal = recordsWithDateNum[0]?.total || 0;
                    recordsWithDateNum.forEach({
                        "Discord.useEffect": (r)=>{
                            if (r.recordNum >= startOfThisMonthNum) thisMonthIncrease += r.increase;
                            if (r.recordNum <= endOfPrevMonthNum) endOfPrevMonthTotal = r.total;
                            if (r.recordNum >= startOfWeekNum) thisWeekIncrease += r.increase;
                            if (r.recordNum <= endOfPrevWeekNum) endOfPrevWeekTotal = r.total;
                            if (r.recordNum === todayNum) todayIncrease += r.increase;
                        }
                    }["Discord.useEffect"]);
                    const monthlyIncreaseRate = endOfPrevMonthTotal === 0 ? 100 : Math.round(latest.total / endOfPrevMonthTotal * 100);
                    const weeklyIncreaseRate = endOfPrevWeekTotal === 0 ? 100 : Math.round(latest.total / endOfPrevWeekTotal * 100);
                    const monthlyMap = new Map();
                    dailyRecords.forEach({
                        "Discord.useEffect": (record)=>{
                            const monthLabel = record.date.split("/")[0] + "月";
                            if (!monthlyMap.has(monthLabel)) monthlyMap.set(monthLabel, {
                                increase: 0,
                                total: 0
                            });
                            const current = monthlyMap.get(monthLabel);
                            current.increase += record.increase;
                            current.total = record.total;
                        }
                    }["Discord.useEffect"]);
                    const monthlyTableRaw = Array.from(monthlyMap.entries()).map({
                        "Discord.useEffect.monthlyTableRaw": ([month, val])=>({
                                month,
                                increase: val.increase,
                                cumulative: val.total
                            })
                    }["Discord.useEffect.monthlyTableRaw"]);
                    const monthlyTable = monthlyTableRaw.map({
                        "Discord.useEffect.monthlyTable": (item, idx)=>{
                            let rate = 100;
                            if (idx > 0) {
                                const prevIncrease = monthlyTableRaw[idx - 1].increase;
                                rate = prevIncrease <= 0 ? 100 : Math.round(item.increase / prevIncrease * 100);
                            }
                            return {
                                month: item.month,
                                increase: item.increase,
                                rateRaw: rate,
                                rate: `${rate}%`,
                                cumulative: item.cumulative
                            };
                        }
                    }["Discord.useEffect.monthlyTable"]);
                    const weeklyMap = new Map();
                    let currentYear = nowJst.getFullYear();
                    if (dailyRecords.length > 0 && parseInt(dailyRecords[0].date.split("/")[0], 10) > nowJst.getMonth() + 2) currentYear--;
                    let prevMonth = -1;
                    dailyRecords.forEach({
                        "Discord.useEffect": (record)=>{
                            const [mStr, dStr] = record.date.split("/");
                            const m = parseInt(mStr, 10);
                            const d = parseInt(dStr, 10);
                            if (prevMonth !== -1 && prevMonth === 12 && m === 1) currentYear++;
                            prevMonth = m;
                            const dateObj = new Date(currentYear, m - 1, d);
                            const dayOfWeek = dateObj.getDay() === 0 ? 7 : dateObj.getDay();
                            const endOfWeek = new Date(dateObj.getTime());
                            endOfWeek.setDate(dateObj.getDate() + (7 - dayOfWeek));
                            const startOfWeek = new Date(endOfWeek.getTime());
                            startOfWeek.setDate(endOfWeek.getDate() - 6);
                            const weekKey = `${endOfWeek.getFullYear()}-${endOfWeek.getMonth() + 1}-${endOfWeek.getDate()}`;
                            if (!weeklyMap.has(weekKey)) {
                                weeklyMap.set(weekKey, {
                                    increase: 0,
                                    cumulative: 0,
                                    startStr: `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()}`,
                                    endStr: `${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}`
                                });
                            }
                            const weekData = weeklyMap.get(weekKey);
                            weekData.increase += record.increase;
                            weekData.cumulative = record.total;
                        }
                    }["Discord.useEffect"]);
                    const weeklyTableRaw = Array.from(weeklyMap.values()).map({
                        "Discord.useEffect.weeklyTableRaw": (data)=>{
                            const endMonth = parseInt(data.endStr.split("/")[0], 10);
                            const endDay = parseInt(data.endStr.split("/")[1], 10);
                            const weekNum = Math.ceil(endDay / 7);
                            return {
                                week: `${endMonth}月第${weekNum}週 (${data.startStr}-${data.endStr})`,
                                shortWeek: `${endMonth}月第${weekNum}週`,
                                increase: data.increase,
                                cumulative: data.cumulative
                            };
                        }
                    }["Discord.useEffect.weeklyTableRaw"]);
                    const weeklyTable = weeklyTableRaw.map({
                        "Discord.useEffect.weeklyTable": (item, idx)=>{
                            let rate = 100;
                            if (idx > 0) {
                                const prevIncrease = weeklyTableRaw[idx - 1].increase;
                                rate = prevIncrease <= 0 ? 100 : Math.round(item.increase / prevIncrease * 100);
                            }
                            return {
                                week: item.week,
                                shortWeek: item.shortWeek,
                                increase: item.increase,
                                rateRaw: rate,
                                rate: `${rate}%`,
                                cumulative: item.cumulative
                            };
                        }
                    }["Discord.useEffect.weeklyTable"]);
                    // ★ マイナスの場合は「減少数」として振り分ける
                    const monthlyByTotal = [
                        ...monthlyTableRaw
                    ].slice(-4).map({
                        "Discord.useEffect.monthlyByTotal": (item)=>{
                            const res = {
                                name: item.month
                            };
                            if (item.increase >= 0) res["増加数"] = item.increase;
                            else res["減少数"] = item.increase;
                            return res;
                        }
                    }["Discord.useEffect.monthlyByTotal"]);
                    const weeklyByTotal = [
                        ...weeklyTableRaw
                    ].slice(-4).map({
                        "Discord.useEffect.weeklyByTotal": (item)=>{
                            const res = {
                                name: item.shortWeek
                            };
                            if (item.increase >= 0) res["増加数"] = item.increase;
                            else res["減少数"] = item.increase;
                            return res;
                        }
                    }["Discord.useEffect.weeklyByTotal"]);
                    const monthlyRateTrend = monthlyTable.map({
                        "Discord.useEffect.monthlyRateTrend": (item)=>({
                                name: item.month,
                                先月比: item.rateRaw
                            })
                    }["Discord.useEffect.monthlyRateTrend"]);
                    const weeklyRateTrend = weeklyTable.map({
                        "Discord.useEffect.weeklyRateTrend": (item)=>({
                                name: item.shortWeek,
                                先週比: item.rateRaw
                            })
                    }["Discord.useEffect.weeklyRateTrend"]);
                    // ★ ここで全て計算済みのデータを setData に登録します
                    setData({
                        summary: {
                            totalMembers: latest.total,
                            thisMonthIncrease: thisMonthIncrease,
                            monthlyIncreaseRate: monthlyIncreaseRate,
                            thisWeekIncrease: thisWeekIncrease,
                            weeklyIncreaseRate: weeklyIncreaseRate,
                            todayIncrease: todayIncrease,
                            consecutiveZeroDays,
                            consecutiveIncreaseDays
                        },
                        charts: {
                            membersTrend: dailyRecords.map({
                                "Discord.useEffect": (record)=>({
                                        name: record.date,
                                        累計人数: record.total,
                                        SNS総フォロワー数: record.snsTotal > 0 ? record.snsTotal : undefined
                                    })
                            }["Discord.useEffect"]),
                            monthlyByTotal,
                            weeklyByTotal,
                            sourceDistribution,
                            monthlyRateTrend,
                            weeklyRateTrend
                        },
                        tables: {
                            monthlyTable: [
                                ...monthlyTable
                            ].reverse(),
                            weeklyTable: [
                                ...weeklyTable
                            ].reverse()
                        }
                    });
                }
            }["Discord.useEffect"]).catch({
                "Discord.useEffect": (err)=>console.error("CSV Fetch Error:", err)
            }["Discord.useEffect"]);
        }
    }["Discord.useEffect"], []);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/discord.tsx",
                    lineNumber: 402,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "スプレッドシートからダッシュボードデータを生成中..."
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/discord.tsx",
                    lineNumber: 403,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/discord.tsx",
            lineNumber: 401,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/discord.tsx",
        lineNumber: 400,
        columnNumber: 7
    }, this);
    const { summary, charts, tables } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "Discord登録数"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/discord.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "Cosmo Base全体の登録者数、増加推移、詳細な期間集計を確認できます。"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/discord.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1DVcnAj75n_Hokt74Q-SX_FI_J5PSbJiOzhvwJfHggFM/edit?gid=0#gid=0",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/discord.tsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/discord.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/discord.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/discord.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "全体の人数",
                        value: summary.totalMembers?.toLocaleString() ?? 0,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月の増加数",
                        value: formatDiff(summary.thisMonthIncrease),
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "1カ月比",
                        value: `${summary.monthlyIncreaseRate ?? 0}`,
                        unit: "%",
                        trendValue: "先月末比",
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                        accentColor: "accent"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今週の増加数",
                        value: formatDiff(summary.thisWeekIncrease),
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "週間比",
                        value: summary.weeklyIncreaseRate ?? 0,
                        unit: "%",
                        trendValue: "先週末比",
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今日の増加数",
                        value: formatDiff(summary.todayIncrease),
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"],
                        accentColor: "warning"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "連続増加日数",
                        value: `${summary.consecutiveIncreaseDays ?? 0}`,
                        unit: "日",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "増加0人 連続日数",
                        value: `${summary.consecutiveZeroDays ?? 0}`,
                        unit: "日",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                        accentColor: summary.consecutiveZeroDays > 0 ? "danger" : "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/discord.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "全体の人数推移",
                description: "Discord参加人数とSNSフォロワー数の比較",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>setShowSns(!showSns),
                            className: showSns ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30 text-foreground",
                            children: showSns ? "SNSフォロワー数を隠す" : "SNSフォロワー数を重ねて比較"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/discord.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                        height: "h-[350px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartComponent"], {
                            data: charts.membersTrend.slice(-90),
                            lines: [
                                {
                                    dataKey: "累計人数",
                                    name: "Discord累計人数",
                                    color: "#38BDF8"
                                },
                                ...showSns ? [
                                    {
                                        dataKey: "SNS総フォロワー数",
                                        name: "SNS総フォロワー数",
                                        color: "#F59E0B"
                                    }
                                ] : []
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/discord.tsx",
                            lineNumber: 518,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 517,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/discord.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月間 登録数 先月比の推移",
                        description: "前月の増加人数に対するパーセンテージ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$linear$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearChartComponent"], {
                                data: charts.monthlyRateTrend.slice(-12),
                                lines: [
                                    {
                                        dataKey: "先月比",
                                        name: "先月比",
                                        color: "#10B981"
                                    }
                                ],
                                yAxisUnit: "%"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/discord.tsx",
                                lineNumber: 546,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/discord.tsx",
                            lineNumber: 545,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 541,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "週間 登録数 先週比の推移",
                        description: "前週の増加人数に対するパーセンテージ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$linear$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearChartComponent"], {
                                data: charts.weeklyRateTrend.slice(-12),
                                lines: [
                                    {
                                        dataKey: "先週比",
                                        name: "先週比",
                                        color: "#F59E0B"
                                    }
                                ],
                                yAxisUnit: "%"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/discord.tsx",
                                lineNumber: 558,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/discord.tsx",
                            lineNumber: 557,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/discord.tsx",
                lineNumber: 540,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月別増加人数",
                        description: "直近4か月の推移",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                data: charts.monthlyByTotal,
                                bars: [
                                    {
                                        dataKey: "増加数",
                                        name: "増加人数",
                                        color: "#38BDF8"
                                    },
                                    {
                                        dataKey: "減少数",
                                        name: "減少人数",
                                        color: "#EF4444"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/discord.tsx",
                                lineNumber: 570,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/discord.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 568,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "週別増加人数",
                        description: "直近4週の推移 (月〜日)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                data: charts.weeklyByTotal,
                                bars: [
                                    {
                                        dataKey: "増加数",
                                        name: "増加人数",
                                        color: "#8B5CF6"
                                    },
                                    {
                                        dataKey: "減少数",
                                        name: "減少人数",
                                        color: "#EF4444"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/discord.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/discord.tsx",
                            lineNumber: 580,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/discord.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月単位の増加人数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "month",
                                    label: "月",
                                    align: "left"
                                },
                                {
                                    key: "increase",
                                    label: "増加人数",
                                    align: "right"
                                },
                                {
                                    key: "rate",
                                    label: "前月比",
                                    align: "right"
                                },
                                {
                                    key: "cumulative",
                                    label: "累計人数",
                                    align: "right"
                                }
                            ],
                            data: tables.monthlyTable.map((row)=>({
                                    ...row,
                                    increase: formatDiff(row.increase)
                                }))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/discord.tsx",
                            lineNumber: 593,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "週単位の増加人数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "week",
                                    label: "週 (月〜日)",
                                    align: "left"
                                },
                                {
                                    key: "increase",
                                    label: "増加人数",
                                    align: "right"
                                },
                                {
                                    key: "rate",
                                    label: "前週比",
                                    align: "right"
                                },
                                {
                                    key: "cumulative",
                                    label: "累計人数",
                                    align: "right"
                                }
                            ],
                            data: tables.weeklyTable.map((row)=>({
                                    ...row,
                                    increase: formatDiff(row.increase)
                                }))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/discord.tsx",
                            lineNumber: 607,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/discord.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "流入元割合",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                    height: "h-[350px]",
                    children: charts.sourceDistribution.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                        data: charts.sourceDistribution,
                        centerLabel: "流入数"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 624,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full items-center justify-center text-muted-foreground",
                        children: "データがありません"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/discord.tsx",
                        lineNumber: 626,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/discord.tsx",
                    lineNumber: 622,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/discord.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/discord.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
_s(Discord, "tCxsoSkGj+TXeGf9pOP4XEXn5KM=");
_c = Discord;
var _c;
__turbopack_context__.k.register(_c, "Discord");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/partner-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartnerPage",
    ()=>PartnerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check.js [app-client] (ecmascript) <export default as FileCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/chart-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/scrollable-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/donut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
// カテゴリ用カラーパレット
const CATEGORY_COLORS = {
    宇宙系学生団体: "#38BDF8",
    宇宙系企業: "#8B5CF6",
    非宇宙系学生団体: "#22C55E",
    非宇宙系企業: "#F59E0B"
};
function PartnerPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PartnerPage.useEffect": ()=>{
            // パートナー連絡リストのCSV URL
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEJHQIgKbrIVbjo1mlnEg2iN3Jl4MXit4ArDW9ISOumOEzjKvjhcckAka7zWSkPwihVlxdC0255Q0D/pub?gid=560621363&single=true&output=csv";
            fetch(csvUrl).then({
                "PartnerPage.useEffect": (response)=>response.text()
            }["PartnerPage.useEffect"]).then({
                "PartnerPage.useEffect": (csvText)=>{
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                        header: true,
                        skipEmptyLines: true
                    });
                    const rows = parsed.data;
                    if (rows.length === 0) return;
                    let totalPartners = 0; // のべパートナー企業団体数 (公開)
                    let pendingAnnouncement = 0; // 公式発表待ち (締結)
                    let applied = 0; // 申請済み (申請)
                    let pendingApplication = 0; // 申請待ち (申請待ち)
                    let pendingContract = 0; // 検討中 (検討中)
                    let contacted = 0; // 連絡済み (連絡済)
                    let declined = 0; // 締結見送り (締結見送り)
                    // --- 各段（ステージ）ごとの集計用変数 ---
                    // 1段目: 公開
                    let s1_space = 0, s1_nonSpace = 0, s1_student = 0, s1_enterprise = 0;
                    const s1_catMap = new Map();
                    // 2段目: 申請待ち, 申請, 締結, 公開
                    let s2_space = 0, s2_nonSpace = 0, s2_student = 0, s2_enterprise = 0;
                    const s2_catMap = new Map();
                    // 3段目: 連絡済, 検討中, 締結見送り, 申請待ち, 申請, 締結, 公開
                    let s3_space = 0, s3_nonSpace = 0, s3_student = 0, s3_enterprise = 0;
                    const s3_catMap = new Map();
                    const monthlyMap = new Map();
                    const monthlyMap2 = new Map();
                    rows.forEach({
                        "PartnerPage.useEffect": (row)=>{
                            const status = String(row["status"] || "").trim();
                            const category = String(row["category"] || "").trim();
                            const releaseDate = String(row["ReleaseDate"] || "").trim();
                            const contactedDate = String(row["ContactedDate"] || "").trim();
                            // --- KPIの集計 ---
                            if (status === "公開") totalPartners++;
                            if (status === "締結") pendingAnnouncement++;
                            if (status === "申請") applied++;
                            if (status === "申請待ち") pendingApplication++;
                            if (status === "検討中") pendingContract++;
                            if (status === "連絡済") contacted++;
                            if (status === "締結見送り") declined++;
                            // --- 割合グラフの集計（9個の円グラフ用） ---
                            const isS1 = status === "公開";
                            const isS2 = [
                                "申請待ち",
                                "申請",
                                "締結",
                                "公開"
                            ].includes(status);
                            const isS3 = [
                                "連絡済",
                                "検討中",
                                "締結見送り",
                                "申請待ち",
                                "申請",
                                "締結",
                                "公開"
                            ].includes(status);
                            const isNonSpace = category.includes("非宇宙系");
                            const isSpace = !isNonSpace && category.includes("宇宙系");
                            const isStudent = category.includes("学生団体");
                            const isEnterprise = category.includes("企業");
                            if (isS1 && category) {
                                if (isNonSpace) s1_nonSpace++;
                                else if (isSpace) s1_space++;
                                if (isStudent) s1_student++;
                                else if (isEnterprise) s1_enterprise++;
                                s1_catMap.set(category, (s1_catMap.get(category) || 0) + 1);
                            }
                            if (isS2 && category) {
                                if (isNonSpace) s2_nonSpace++;
                                else if (isSpace) s2_space++;
                                if (isStudent) s2_student++;
                                else if (isEnterprise) s2_enterprise++;
                                s2_catMap.set(category, (s2_catMap.get(category) || 0) + 1);
                            }
                            if (isS3 && category) {
                                if (isNonSpace) s3_nonSpace++;
                                else if (isSpace) s3_space++;
                                if (isStudent) s3_student++;
                                else if (isEnterprise) s3_enterprise++;
                                s3_catMap.set(category, (s3_catMap.get(category) || 0) + 1);
                            }
                            // --- 月別締結発表数の集計（公開済みでReleaseDateがあるもの） ---
                            if (status === "公開" && releaseDate) {
                                const dateObj = new Date(releaseDate.replace(/\-/g, "/"));
                                if (!isNaN(dateObj.getTime())) {
                                    const ym = `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, "0")}`;
                                    monthlyMap.set(ym, (monthlyMap.get(ym) || 0) + 1);
                                }
                            }
                            // --- 月別連絡数の集計（ContactedDateがあるもの） ---
                            if (contactedDate) {
                                const dateObj = new Date(contactedDate.replace(/\-/g, "/"));
                                if (!isNaN(dateObj.getTime())) {
                                    const ym = `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, "0")}`;
                                    monthlyMap2.set(ym, (monthlyMap2.get(ym) || 0) + 1);
                                }
                            }
                        }
                    }["PartnerPage.useEffect"]);
                    // --- 月別テーブルデータの作成（発表数・連絡数を統合） ---
                    const allMonthsSet = new Set([
                        ...monthlyMap.keys(),
                        ...monthlyMap2.keys()
                    ]);
                    const existingMonths = Array.from(allMonthsSet).sort();
                    // 間の月（データが0件の月）が抜けないように、最初の月から最後の月までを補完する
                    const sortedAllMonths = [];
                    if (existingMonths.length > 0) {
                        const first = existingMonths[0];
                        const last = existingMonths[existingMonths.length - 1];
                        let [currY, currM] = first.split("/").map(Number);
                        const [lastY, lastM] = last.split("/").map(Number);
                        while(currY < lastY || currY === lastY && currM <= lastM){
                            sortedAllMonths.push(`${currY}/${String(currM).padStart(2, "0")}`);
                            currM++;
                            if (currM > 12) {
                                currM = 1;
                                currY++;
                            }
                        }
                    }
                    let cumulativeAnnounced = 0;
                    let cumulativeContacted = 0;
                    const combinedMonthlyTableRaw = sortedAllMonths.map({
                        "PartnerPage.useEffect.combinedMonthlyTableRaw": (m)=>{
                            const announced = monthlyMap.get(m) || 0;
                            const contacted = monthlyMap2.get(m) || 0;
                            cumulativeAnnounced += announced;
                            cumulativeContacted += contacted;
                            return {
                                month: m,
                                announced,
                                contacted,
                                cumulativeAnnounced,
                                cumulativeContacted
                            };
                        }
                    }["PartnerPage.useEffect.combinedMonthlyTableRaw"]);
                    const latestMonthItem = combinedMonthlyTableRaw[combinedMonthlyTableRaw.length - 1];
                    const prevMonthItem = combinedMonthlyTableRaw[combinedMonthlyTableRaw.length - 2];
                    // 発表数のKPI計算
                    const monthlyAnnounced = latestMonthItem ? latestMonthItem.announced : 0;
                    const prevMonthlyAnnounced = prevMonthItem ? prevMonthItem.announced : 0;
                    const monthlyAnnouncedRate = prevMonthlyAnnounced === 0 ? 100 : Math.round(monthlyAnnounced / prevMonthlyAnnounced * 100);
                    // 連絡数のKPI計算
                    const monthlyContacted = latestMonthItem ? latestMonthItem.contacted : 0;
                    const prevMonthlyContacted = prevMonthItem ? prevMonthItem.contacted : 0;
                    const monthlyContactedRate = prevMonthlyContacted === 0 ? 100 : Math.round(monthlyContacted / prevMonthlyContacted * 100);
                    // 表示用テーブルデータのフォーマット
                    const monthlyTable = combinedMonthlyTableRaw.map({
                        "PartnerPage.useEffect.monthlyTable": (item, idx)=>{
                            let announcedRate = 100;
                            if (idx > 0) {
                                const prevCumAnnounced = combinedMonthlyTableRaw[idx - 1].cumulativeAnnounced;
                                announcedRate = prevCumAnnounced === 0 ? 100 : Math.round(item.cumulativeAnnounced / prevCumAnnounced * 100);
                            }
                            return {
                                month: item.month,
                                contacted: `+${item.contacted}`,
                                announced: `+${item.announced}`,
                                cumulativeContacted: item.cumulativeContacted,
                                cumulativeAnnounced: item.cumulativeAnnounced,
                                rate: `${announcedRate}%`
                            };
                        }
                    }["PartnerPage.useEffect.monthlyTable"]).reverse(); // 新しい月を一番上に
                    // --- 各段のグラフデータ生成関数 ---
                    const makeChartData = {
                        "PartnerPage.useEffect.makeChartData": (space, nonSpace, student, enterprise, catMap)=>{
                            const spaceRelated = [
                                {
                                    name: "宇宙系",
                                    value: space,
                                    color: "#38BDF8"
                                },
                                {
                                    name: "非宇宙系",
                                    value: nonSpace,
                                    color: "#22C55E"
                                }
                            ].filter({
                                "PartnerPage.useEffect.makeChartData.spaceRelated": (d)=>d.value > 0
                            }["PartnerPage.useEffect.makeChartData.spaceRelated"]);
                            const organizationType = [
                                {
                                    name: "企業",
                                    value: enterprise,
                                    color: "#8B5CF6"
                                },
                                {
                                    name: "学生団体",
                                    value: student,
                                    color: "#F59E0B"
                                }
                            ].filter({
                                "PartnerPage.useEffect.makeChartData.organizationType": (d)=>d.value > 0
                            }["PartnerPage.useEffect.makeChartData.organizationType"]);
                            const fourCategories = Array.from(catMap.entries()).map({
                                "PartnerPage.useEffect.makeChartData.fourCategories": ([name, value])=>({
                                        name,
                                        value,
                                        color: CATEGORY_COLORS[name] || "#6B7280"
                                    })
                            }["PartnerPage.useEffect.makeChartData.fourCategories"]).filter({
                                "PartnerPage.useEffect.makeChartData.fourCategories": (d)=>d.value > 0
                            }["PartnerPage.useEffect.makeChartData.fourCategories"]).sort({
                                "PartnerPage.useEffect.makeChartData.fourCategories": (a, b)=>b.value - a.value
                            }["PartnerPage.useEffect.makeChartData.fourCategories"]);
                            return {
                                spaceRelated,
                                organizationType,
                                fourCategories
                            };
                        }
                    }["PartnerPage.useEffect.makeChartData"];
                    setData({
                        summary: {
                            totalPartners,
                            pendingAnnouncement,
                            applied,
                            pendingApplication,
                            pendingContract,
                            contacted,
                            declined,
                            monthlyAnnounced,
                            monthlyAnnouncedRate,
                            monthlyContactedRate
                        },
                        charts: {
                            stage1: makeChartData(s1_space, s1_nonSpace, s1_student, s1_enterprise, s1_catMap),
                            stage2: makeChartData(s2_space, s2_nonSpace, s2_student, s2_enterprise, s2_catMap),
                            stage3: makeChartData(s3_space, s3_nonSpace, s3_student, s3_enterprise, s3_catMap)
                        },
                        tables: {
                            monthlyTable
                        }
                    });
                }
            }["PartnerPage.useEffect"]).catch({
                "PartnerPage.useEffect": (err)=>console.error("CSV Fetch Error:", err)
            }["PartnerPage.useEffect"]);
        }
    }["PartnerPage.useEffect"], []);
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[400px] items-center justify-center text-muted-foreground",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "パートナーデータを集計中..."
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 329,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
            lineNumber: 328,
            columnNumber: 7
        }, this);
    }
    const { summary, charts, tables } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-foreground",
                        children: "パートナー分析"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "パートナー企業・団体の締結状況と属性を確認できます。"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1Nbq6rD_PfF1-KdIXqlq4wCVPA6SWITvDroO5eKe42Q4/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-5 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "のべパートナー企業団体数",
                        value: summary.totalPartners.toLocaleString(),
                        unit: "団体",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "公式発表待ち",
                        value: summary.pendingAnnouncement,
                        unit: "団体",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                        accentColor: "warning"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "申請済み",
                        value: summary.applied,
                        unit: "団体",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "申請待ち",
                        value: summary.pendingApplication,
                        unit: "団体",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                        accentColor: "accent"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "締結発表の先月比",
                        value: summary.monthlyAnnouncedRate,
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success",
                        trendValue: `前月比`,
                        trendType: "up"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-5 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "検討中",
                        value: summary.pendingContract,
                        unit: "団体",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "連絡済み",
                        value: summary.contacted,
                        unit: "団体",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "締結見送り",
                        value: summary.declined,
                        unit: "団体",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
                        accentColor: "danger"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月の締結発表数",
                        value: `+${summary.monthlyAnnounced}`,
                        unit: "団体",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "連絡済み団体の先月比",
                        value: summary.monthlyContactedRate,
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success",
                        trendValue: `前月比`,
                        trendType: "up"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 mb-4 border-l-4 border-primary pl-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-foreground",
                        children: "締結発表済みの属性 (公開)"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: "すでに公開されているパートナーの属性割合です。"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 448,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "宇宙系・非宇宙系",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[250px]",
                            children: charts.stage1.spaceRelated.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.stage1.spaceRelated,
                                centerLabel: "団体"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 456,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 461,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "学生団体・企業",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[250px]",
                            children: charts.stage1.organizationType.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.stage1.organizationType,
                                centerLabel: "団体"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 470,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 475,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "4分類の割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[250px]",
                            children: charts.stage1.fourCategories.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.stage1.fourCategories,
                                centerLabel: "団体"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 484,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 489,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 482,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 mb-4 border-l-4 border-success pl-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-foreground",
                        children: "手続中〜公開の属性 (申請待ち・申請・締結・公開)"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: "申請以降のフェーズに進んでいる団体の属性割合です。"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "宇宙系・非宇宙系",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[250px]",
                            children: charts.stage2.spaceRelated.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.stage2.spaceRelated,
                                centerLabel: "団体"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 510,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 515,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "学生団体・企業",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[250px]",
                            children: charts.stage2.organizationType.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.stage2.organizationType,
                                centerLabel: "団体"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 524,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 529,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 522,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "4分類の割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[250px]",
                            children: charts.stage2.fourCategories.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.stage2.fourCategories,
                                centerLabel: "団体"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 538,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 543,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 536,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 mb-4 border-l-4 border-warning pl-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-foreground",
                        children: "アプローチ済み全体の属性 (連絡済〜公開・見送り含む)"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: "営業等でアプローチを行ったすべての団体の属性割合です。"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "宇宙系・非宇宙系",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[250px]",
                            children: charts.stage3.spaceRelated.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.stage3.spaceRelated,
                                centerLabel: "団体"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 564,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 569,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 562,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "学生団体・企業",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[250px]",
                            children: charts.stage3.organizationType.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.stage3.organizationType,
                                centerLabel: "団体"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 578,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 583,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 576,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "4分類の割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[250px]",
                            children: charts.stage3.fourCategories.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.stage3.fourCategories,
                                centerLabel: "団体"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 592,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                                lineNumber: 597,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                        lineNumber: 589,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "月ごとのパートナー連絡・発表推移",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                    columns: [
                        {
                            key: "month",
                            label: "月",
                            align: "left"
                        },
                        {
                            key: "contacted",
                            label: "連絡数",
                            align: "right"
                        },
                        {
                            key: "cumulativeContacted",
                            label: "累計連絡数",
                            align: "right"
                        },
                        {
                            key: "announced",
                            label: "締結発表数",
                            align: "right"
                        },
                        {
                            key: "cumulativeAnnounced",
                            label: "累計パートナー数",
                            align: "right"
                        },
                        {
                            key: "rate",
                            label: "パートナー数 前月比",
                            align: "right"
                        }
                    ],
                    data: tables.monthlyTable
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                    lineNumber: 608,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/partner-page.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/partner-page.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
_s(PartnerPage, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c = PartnerPage;
var _c;
__turbopack_context__.k.register(_c, "PartnerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/quiz-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpaceQuizPage",
    ()=>SpaceQuizPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-text.js [app-client] (ecmascript) <export default as BookOpenText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ScatterChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Scatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ZAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/chart-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/scrollable-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/line-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$linear$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/linear-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/donut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const getJSTDate = ()=>new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tokyo"
    }));
// 平均回答数をフォーマットする関数 (100以上は整数、10-99.9は小数第1位、0-9.99は小数第2位)
const formatAverage = (num)=>{
    if (!num || isNaN(num) || num === 0) return "0";
    if (num >= 100) return Math.round(num).toString();
    if (num >= 10) return (Math.round(num * 10) / 10).toFixed(1);
    return (Math.round(num * 100) / 100).toFixed(2);
};
const format = (num)=>{
    return (Math.round(num * 100) / 100).toFixed(2);
};
// 種別用のカラーパレット
const TYPE_COLORS = [
    "#38BDF8",
    "#8B5CF6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
    "#10B981",
    "#6B7280",
    "#F472B6",
    "#A78BFA",
    "#34D399",
    "#FBBF24"
];
// 媒体のバッジを生成する関数
const renderPlatformBadges = (platforms)=>{
    if (!platforms || platforms.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-muted-foreground text-xs",
        children: "-"
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
        lineNumber: 81,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
    // 4媒体すべての場合は専用の色に変更
    if (platforms.length === 4) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 flex-wrap min-w-[80px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-[#e879f9]/20 text-[#e879f9] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap border border-fuchsia-500/30",
                children: "すべて"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5 flex-wrap min-w-[80px]",
        children: platforms.map((p)=>{
            if (p === "Discord") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-[#5865F2]/20 text-[#5865F2] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap",
                children: "Discord"
            }, p, false, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            if (p === "X") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-[#1DA1F2]/20 text-[#1DA1F2] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap",
                children: "X"
            }, p, false, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            if (p === "Instagram") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-[#E4405F]/20 text-[#E4405F] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap",
                children: "Instagram"
            }, p, false, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            if (p === "マイコミュ") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-[#F59E0B]/20 text-[#F59E0B] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap",
                children: "マイコミュ"
            }, p, false, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            return null;
        })
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ScatterTooltip = ({ active, payload })=>{
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900 border border-white/10 p-3 rounded-xl shadow-xl z-50 max-w-xs cursor-default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[150px] overflow-y-auto custom-scrollbar pr-2 mb-2 space-y-2",
                    children: data.questions.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-white/10 pb-2 pt-0.5 last:border-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-bold text-sm leading-tight mb-1.5",
                                    children: q.text
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                renderPlatformBadges(q.platforms)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-end border-t border-white/10 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#38BDF8] text-xs font-medium",
                                    children: [
                                        "回答数: ",
                                        data.answers,
                                        "件"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#8B5CF6] text-xs font-medium",
                                    children: [
                                        "正答率: ",
                                        data.accuracy,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-[10px] whitespace-nowrap ml-2",
                            children: "クリックで固定表示"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
_c = ScatterTooltip;
function SpaceQuizPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortMode, setSortMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("date_desc");
    const [selectedDot, setSelectedDot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // グラフ表示のON/OFFステート
    const [visibleLines, setVisibleLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        全体: true,
        Discord: true,
        X: true,
        Instagram: true,
        マイコミュ: true
    });
    // 種別推移グラフ用のステート
    const [typeChartPeriod, setTypeChartPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("monthly");
    const [typeChartMetric, setTypeChartMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ans");
    const [typeTablePeriod, setTypeTablePeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overall");
    const [visibleTypes, setVisibleTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // ★ 新設：クイズ全体用の指標切り替えステート
    const [monthlyMetric, setMonthlyMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("回答数");
    const [weeklyMetric, setWeeklyMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("回答数");
    const toggleLine = (lineKey)=>setVisibleLines((prev)=>({
                ...prev,
                [lineKey]: !prev[lineKey]
            }));
    const toggleTypeLine = (typeKey)=>setVisibleTypes((prev)=>({
                ...prev,
                [typeKey]: !prev[typeKey]
            }));
    // 種別表示の初期化
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpaceQuizPage.useEffect": ()=>{
            if (data?.charts?.activeTypes) {
                const initial = {};
                data.charts.activeTypes.forEach({
                    "SpaceQuizPage.useEffect": (t)=>initial[t] = true
                }["SpaceQuizPage.useEffect"]);
                setVisibleTypes(initial);
            }
        }
    }["SpaceQuizPage.useEffect"], [
        data?.charts?.activeTypes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpaceQuizPage.useEffect": ()=>{
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSVq2TSYbOibnTUUyYqHJmrEfspQ1KQn8JpaTsvkrC8oekSogURY1N9yqocitnAbEXewzPIQVyj59rf/pub?gid=0&single=true&output=csv";
            fetch(csvUrl).then({
                "SpaceQuizPage.useEffect": (response)=>response.text()
            }["SpaceQuizPage.useEffect"]).then({
                "SpaceQuizPage.useEffect": (csvText)=>{
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                        header: true,
                        skipEmptyLines: true
                    });
                    const rows = parsed.data;
                    if (rows.length === 0) return;
                    const validRows = rows.filter({
                        "SpaceQuizPage.useEffect.validRows": (row)=>row["問題"] && String(row["問題"]).trim() !== ""
                    }["SpaceQuizPage.useEffect.validRows"]);
                    if (validRows.length === 0) return;
                    let totalAnswers = 0, totalCorrects = 0, totalZeroAnswers = 0;
                    let todayCorrects = 0, thisWeekCorrects = 0, thisMonthCorrects = 0;
                    let sumDiscord = 0, sumX = 0, sumInstagram = 0, sumMyCom = 0;
                    const pStats = {
                        Discord: {
                            qCount: 0,
                            zeroCount: 0,
                            ans: 0,
                            cor: 0
                        },
                        X: {
                            qCount: 0,
                            zeroCount: 0,
                            ans: 0,
                            cor: 0
                        },
                        Instagram: {
                            qCount: 0,
                            zeroCount: 0,
                            ans: 0,
                            cor: 0
                        },
                        マイコミュ: {
                            qCount: 0,
                            zeroCount: 0,
                            ans: 0,
                            cor: 0
                        }
                    };
                    const tableDataRaw = [];
                    const dailyAgg = new Map();
                    const typeCounts = new Map();
                    // ★ 種別分析用の集計Map
                    const typeStatsOverall = new Map();
                    const typeStatsMonthly = new Map();
                    const typeStatsWeekly = new Map();
                    const initAgg = {
                        "SpaceQuizPage.useEffect.initAgg": ()=>({
                                qCount: 0,
                                zeroCount: 0,
                                ans: 0,
                                cor: 0
                            })
                    }["SpaceQuizPage.useEffect.initAgg"];
                    // ★ クイズ全体分析用の月別・週別集計Map
                    const quizMonthlyMap = new Map();
                    const quizWeeklyMap = new Map();
                    const nowJst = getJSTDate();
                    const currentY = nowJst.getFullYear();
                    const currentM = nowJst.getMonth() + 1;
                    const currentD = nowJst.getDate();
                    const todayNum = currentY * 10000 + currentM * 100 + currentD;
                    const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
                    const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
                    const startOfWeekJst = new Date(nowJst.getTime());
                    startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
                    const startOfWeekNum = startOfWeekJst.getFullYear() * 10000 + (startOfWeekJst.getMonth() + 1) * 100 + startOfWeekJst.getDate();
                    let todayQuestions = 0, todayZeroAnswers = 0;
                    let thisWeekQuestions = 0, thisWeekZeroAnswers = 0;
                    let thisMonthQuestions = 0, thisMonthZeroAnswers = 0;
                    validRows.forEach({
                        "SpaceQuizPage.useEffect": (row)=>{
                            const dateStrRaw = String(row["出題日"] || "").replace(/\-/g, "/").split(" ")[0];
                            const parts = dateStrRaw.split("/");
                            if (parts.length < 3) return;
                            const y = parseInt(parts[0], 10);
                            const m = parseInt(parts[1], 10);
                            const d = parseInt(parts[2], 10);
                            const num = y * 10000 + m * 100 + d;
                            const dateKey = `${y}/${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}`;
                            const formattedDate = `${m}/${d}`;
                            const typeStr = String(row["クイズの分類"] || row["種別"] || row["カテゴリ"] || "未分類").trim();
                            if (typeStr) typeCounts.set(typeStr, (typeCounts.get(typeStr) || 0) + 1);
                            const answers = parseInt(String(row["回答数"] || "0").replace(/,/g, ""), 10) || 0;
                            if (answers === 0) totalZeroAnswers++;
                            const rawDiscord = String(row["回答数(Discord)"] || "").trim();
                            const rawX = String(row["回答数(X)"] || "").trim();
                            const rawInstagram = String(row["回答数(Instagram)"] || "").trim();
                            const rawMyCom = String(row["回答数(マイコミュ)"] || "").trim();
                            const ansDiscord = parseInt(rawDiscord.replace(/,/g, ""), 10) || 0;
                            const ansX = parseInt(rawX.replace(/,/g, ""), 10) || 0;
                            const ansInstagram = parseInt(rawInstagram.replace(/,/g, ""), 10) || 0;
                            const ansMyCom = parseInt(rawMyCom.replace(/,/g, ""), 10) || 0;
                            const corDiscord = parseInt(String(row["正答数(Discord)"] || "0").replace(/,/g, ""), 10) || 0;
                            const corX = parseInt(String(row["正答数(X)"] || "0").replace(/,/g, ""), 10) || 0;
                            const corInstagram = parseInt(String(row["正答数(Instagram)"] || "0").replace(/,/g, ""), 10) || 0;
                            const corMyCom = parseInt(String(row["正答数(マイコミュ)"] || "0").replace(/,/g, ""), 10) || 0;
                            const platforms = [];
                            if (rawDiscord !== "") {
                                platforms.push("Discord");
                                pStats.Discord.qCount++;
                                if (ansDiscord === 0) pStats.Discord.zeroCount++;
                                pStats.Discord.ans += ansDiscord;
                                pStats.Discord.cor += corDiscord;
                            }
                            if (rawX !== "") {
                                platforms.push("X");
                                pStats.X.qCount++;
                                if (ansX === 0) pStats.X.zeroCount++;
                                pStats.X.ans += ansX;
                                pStats.X.cor += corX;
                            }
                            if (rawInstagram !== "") {
                                platforms.push("Instagram");
                                pStats.Instagram.qCount++;
                                if (ansInstagram === 0) pStats.Instagram.zeroCount++;
                                pStats.Instagram.ans += ansInstagram;
                                pStats.Instagram.cor += corInstagram;
                            }
                            if (rawMyCom !== "") {
                                platforms.push("マイコミュ");
                                pStats.マイコミュ.qCount++;
                                if (ansMyCom === 0) pStats.マイコミュ.zeroCount++;
                                pStats.マイコミュ.ans += ansMyCom;
                                pStats.マイコミュ.cor += corMyCom;
                            }
                            sumDiscord += ansDiscord;
                            sumX += ansX;
                            sumInstagram += ansInstagram;
                            sumMyCom += ansMyCom;
                            let accRaw = String(row["正答率"] || "0").replace("%", "").trim();
                            let accNum = parseFloat(accRaw);
                            if (String(row["正答率"]).indexOf("%") === -1 && accNum > 0 && accNum <= 1) accNum *= 100;
                            if (isNaN(accNum)) accNum = 0;
                            const correctSum = corDiscord + corX + corInstagram + corMyCom;
                            const calculatedCorrect = correctSum > 0 ? correctSum : Math.round(answers * (accNum / 100));
                            totalAnswers += answers;
                            totalCorrects += calculatedCorrect;
                            if (!dailyAgg.has(dateKey)) {
                                dailyAgg.set(dateKey, {
                                    num,
                                    formattedDate,
                                    answers: 0,
                                    corrects: 0,
                                    discord: 0,
                                    x: 0,
                                    instagram: 0,
                                    MyCom: 0
                                });
                            }
                            const dayData = dailyAgg.get(dateKey);
                            dayData.answers += answers;
                            dayData.corrects += calculatedCorrect;
                            dayData.discord += ansDiscord;
                            dayData.x += ansX;
                            dayData.instagram += ansInstagram;
                            dayData.MyCom += ansMyCom;
                            // ★ 各種時系列の集計処理
                            const monthKey = `${y}/${String(m).padStart(2, "0")}`;
                            const dateObj = new Date(y, m - 1, d);
                            const dw = dateObj.getDay() === 0 ? 7 : dateObj.getDay();
                            const endOfWeek = new Date(dateObj.getTime());
                            endOfWeek.setDate(dateObj.getDate() + (7 - dw));
                            const weekKey = `${endOfWeek.getFullYear()}/${String(endOfWeek.getMonth() + 1).padStart(2, "0")}/${String(endOfWeek.getDate()).padStart(2, "0")}`;
                            // 種別集計
                            if (typeStr && typeStr !== "未分類") {
                                if (!typeStatsOverall.has(typeStr)) typeStatsOverall.set(typeStr, initAgg());
                                const o = typeStatsOverall.get(typeStr);
                                o.qCount++;
                                if (answers === 0) o.zeroCount++;
                                o.ans += answers;
                                o.cor += calculatedCorrect;
                                if (!typeStatsMonthly.has(monthKey)) typeStatsMonthly.set(monthKey, new Map());
                                const mAgg = typeStatsMonthly.get(monthKey);
                                if (!mAgg.has(typeStr)) mAgg.set(typeStr, initAgg());
                                const mo = mAgg.get(typeStr);
                                mo.qCount++;
                                if (answers === 0) mo.zeroCount++;
                                mo.ans += answers;
                                mo.cor += calculatedCorrect;
                                if (!typeStatsWeekly.has(weekKey)) typeStatsWeekly.set(weekKey, new Map());
                                const wAgg = typeStatsWeekly.get(weekKey);
                                if (!wAgg.has(typeStr)) wAgg.set(typeStr, initAgg());
                                const wo = wAgg.get(typeStr);
                                wo.qCount++;
                                if (answers === 0) wo.zeroCount++;
                                wo.ans += answers;
                                wo.cor += calculatedCorrect;
                            }
                            // ★ クイズ全体：月別集計の格納
                            if (!quizMonthlyMap.has(monthKey)) {
                                quizMonthlyMap.set(monthKey, {
                                    qCount: 0,
                                    zeroCount: 0,
                                    ans: 0,
                                    cor: 0
                                });
                            }
                            const qm = quizMonthlyMap.get(monthKey);
                            qm.qCount++;
                            if (answers === 0) qm.zeroCount++;
                            qm.ans += answers;
                            qm.cor += calculatedCorrect;
                            // ★ クイズ全体：週別集計の格納
                            if (!quizWeeklyMap.has(weekKey)) {
                                const startOfWeekDate = new Date(dateObj.getTime());
                                startOfWeekDate.setDate(dateObj.getDate() - (dw - 1));
                                const wLabel = `${startOfWeekDate.getMonth() + 1}/${startOfWeekDate.getDate()}〜${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}`;
                                quizWeeklyMap.set(weekKey, {
                                    qCount: 0,
                                    zeroCount: 0,
                                    ans: 0,
                                    cor: 0,
                                    label: wLabel
                                });
                            }
                            const qw = quizWeeklyMap.get(weekKey);
                            qw.qCount++;
                            if (answers === 0) qw.zeroCount++;
                            qw.ans += answers;
                            qw.cor += calculatedCorrect;
                            tableDataRaw.push({
                                id: row["番号"],
                                question: String(row["問題"]),
                                type: typeStr,
                                answers: answers,
                                correct: calculatedCorrect,
                                accuracy: Math.round(accNum * 10) / 10,
                                num: num,
                                timestamp: new Date(dateStrRaw).getTime(),
                                platforms: platforms
                            });
                            if (num >= startOfThisMonthNum && num <= todayNum) {
                                thisMonthQuestions++;
                                if (answers === 0) thisMonthZeroAnswers++;
                            }
                            if (num >= startOfWeekNum && num <= todayNum) {
                                thisWeekQuestions++;
                                if (answers === 0) thisWeekZeroAnswers++;
                            }
                            if (num === todayNum) {
                                todayQuestions++;
                                if (answers === 0) todayZeroAnswers++;
                            }
                        }
                    }["SpaceQuizPage.useEffect"]);
                    const totalZeroRate = validRows.length > 0 ? totalZeroAnswers / validRows.length * 100 : 0;
                    const zeroRateDay = todayQuestions > 0 ? todayZeroAnswers / todayQuestions * 100 : 0;
                    const zeroRateWeek = thisWeekQuestions > 0 ? thisWeekZeroAnswers / thisWeekQuestions * 100 : 0;
                    const zeroRateMonth = thisMonthQuestions > 0 ? thisMonthZeroAnswers / thisMonthQuestions * 100 : 0;
                    const dailyRecords = Array.from(dailyAgg.values()).sort({
                        "SpaceQuizPage.useEffect.dailyRecords": (a, b)=>a.num - b.num
                    }["SpaceQuizPage.useEffect.dailyRecords"]);
                    let cumulativeAnswers = 0;
                    let cumDiscord = 0, cumX = 0, cumInstagram = 0, cumMyCom = 0;
                    const trendData = [];
                    const accuracyData = [];
                    const endOfPrevMonthJst = new Date(nowJst.getTime());
                    endOfPrevMonthJst.setDate(0);
                    const endOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + endOfPrevMonthJst.getDate();
                    const endOfPrevWeekJst = new Date(startOfWeekJst.getTime());
                    endOfPrevWeekJst.setDate(startOfWeekJst.getDate() - 1);
                    const endOfPrevWeekNum = endOfPrevWeekJst.getFullYear() * 10000 + (endOfPrevWeekJst.getMonth() + 1) * 100 + endOfPrevWeekJst.getDate();
                    const endOfPrevDayJst = new Date(nowJst.getTime());
                    endOfPrevDayJst.setDate(nowJst.getDate() - 1);
                    const endOfPrevDayNum = endOfPrevDayJst.getFullYear() * 10000 + (endOfPrevDayJst.getMonth() + 1) * 100 + endOfPrevDayJst.getDate();
                    let thisMonthAnswers = 0, thisWeekAnswers = 0, todayAnswers = 0;
                    let endOfPrevMonthCum = 0, endOfPrevWeekCum = 0, endOfPrevDayCum = 0;
                    dailyRecords.forEach({
                        "SpaceQuizPage.useEffect": (day)=>{
                            cumulativeAnswers += day.answers;
                            cumDiscord += day.discord;
                            cumX += day.x;
                            cumInstagram += day.instagram;
                            cumMyCom += day.MyCom;
                            trendData.push({
                                name: day.formattedDate,
                                累計_全体: cumulativeAnswers,
                                累計_Discord: cumDiscord,
                                累計_X: cumX,
                                累計_Instagram: cumInstagram,
                                累計_マイコミュ: cumMyCom,
                                日別_全体: day.answers,
                                日別_Discord: day.discord,
                                日別_X: day.x,
                                日別_Instagram: day.instagram,
                                日別_マイコミュ: day.MyCom
                            });
                            accuracyData.push({
                                name: day.formattedDate,
                                正答率: day.answers > 0 ? Math.round(day.corrects / day.answers * 10) / 10 : 0
                            });
                            const num = day.num;
                            if (num >= startOfThisMonthNum) {
                                thisMonthAnswers += day.answers;
                                thisMonthCorrects += day.corrects;
                            }
                            if (num <= endOfPrevMonthNum) endOfPrevMonthCum = cumulativeAnswers;
                            if (num >= startOfWeekNum) {
                                thisWeekAnswers += day.answers;
                                thisWeekCorrects += day.corrects;
                            }
                            if (num <= endOfPrevWeekNum) endOfPrevWeekCum = cumulativeAnswers;
                            if (num === todayNum) {
                                todayAnswers += day.answers;
                                todayCorrects += day.corrects;
                            }
                            if (num <= endOfPrevDayNum) endOfPrevDayCum = cumulativeAnswers;
                        }
                    }["SpaceQuizPage.useEffect"]);
                    const monthlyRate = endOfPrevMonthCum === 0 ? 100 : cumulativeAnswers / endOfPrevMonthCum * 100;
                    const weeklyRate = endOfPrevWeekCum === 0 ? 100 : cumulativeAnswers / endOfPrevWeekCum * 100;
                    const todayRate = endOfPrevDayCum === 0 ? 100 : cumulativeAnswers / endOfPrevDayCum * 100;
                    // 計算元の数値をそのまま格納（フォーマットはレンダリング時に行う）
                    const averageParticipants = validRows.length <= 0 ? 0 : totalAnswers / validRows.length;
                    const todayAverageParticipants = todayQuestions <= 0 ? 0 : todayAnswers / todayQuestions;
                    const weeklyAverageParticipants = thisWeekQuestions <= 0 ? 0 : thisWeekAnswers / thisWeekQuestions;
                    const monthlyAverageParticipants = thisMonthQuestions <= 0 ? 0 : thisMonthAnswers / thisMonthQuestions;
                    const averageAccuracy = totalAnswers <= 0 ? 0 : totalCorrects / totalAnswers * 100;
                    const todayAverageAccuracy = todayAnswers <= 0 ? 0 : todayCorrects / todayAnswers * 100;
                    const weeklyAverageAccuracy = thisWeekAnswers <= 0 ? 0 : thisWeekCorrects / thisWeekAnswers * 100;
                    const monthlyAverageAccuracy = thisMonthAnswers <= 0 ? 0 : thisMonthCorrects / thisMonthAnswers * 100;
                    // --- 種別グラフ用のデータ生成 ---
                    const activeTypes = Array.from(typeCounts.keys()).filter({
                        "SpaceQuizPage.useEffect.activeTypes": (t)=>t !== "未分類"
                    }["SpaceQuizPage.useEffect.activeTypes"]);
                    const monthlyTypeTrend = Array.from(typeStatsMonthly.keys()).sort().map({
                        "SpaceQuizPage.useEffect.monthlyTypeTrend": (monthKey)=>{
                            const mAgg = typeStatsMonthly.get(monthKey);
                            const res = {
                                name: monthKey
                            };
                            activeTypes.forEach({
                                "SpaceQuizPage.useEffect.monthlyTypeTrend": (type)=>{
                                    const d = mAgg.get(type) || initAgg();
                                    res[`${type}_qCount`] = d.qCount;
                                    res[`${type}_ans`] = d.ans;
                                    res[`${type}_avgAns`] = d.qCount > 0 ? d.ans / d.qCount : 0;
                                    res[`${type}_accuracy`] = d.ans > 0 ? Math.round(d.cor / d.ans * 100) : 0;
                                    res[`${type}_zeroRate`] = d.qCount > 0 ? Math.round(d.zeroCount / d.qCount * 100) : 0;
                                }
                            }["SpaceQuizPage.useEffect.monthlyTypeTrend"]);
                            return res;
                        }
                    }["SpaceQuizPage.useEffect.monthlyTypeTrend"]);
                    const weeklyTypeTrend = Array.from(typeStatsWeekly.keys()).sort().map({
                        "SpaceQuizPage.useEffect.weeklyTypeTrend": (weekKey)=>{
                            const wAgg = typeStatsWeekly.get(weekKey);
                            const shortName = weekKey.substring(5); // MM/DD
                            const res = {
                                name: shortName
                            };
                            activeTypes.forEach({
                                "SpaceQuizPage.useEffect.weeklyTypeTrend": (type)=>{
                                    const d = wAgg.get(type) || initAgg();
                                    res[`${type}_qCount`] = d.qCount;
                                    res[`${type}_ans`] = d.ans;
                                    res[`${type}_avgAns`] = d.qCount > 0 ? d.ans / d.qCount : 0;
                                    res[`${type}_accuracy`] = d.ans > 0 ? Math.round(d.cor / d.ans * 100) : 0;
                                    res[`${type}_zeroRate`] = d.qCount > 0 ? Math.round(d.zeroCount / d.qCount * 100) : 0;
                                }
                            }["SpaceQuizPage.useEffect.weeklyTypeTrend"]);
                            return res;
                        }
                    }["SpaceQuizPage.useEffect.weeklyTypeTrend"]);
                    // --- 全体クイズ分析グラフ・テーブル用のデータ生成 ---
                    const quizMonthlyTrend = Array.from(quizMonthlyMap.entries()).sort({
                        "SpaceQuizPage.useEffect.quizMonthlyTrend": (a, b)=>a[0].localeCompare(b[0])
                    }["SpaceQuizPage.useEffect.quizMonthlyTrend"]).map({
                        "SpaceQuizPage.useEffect.quizMonthlyTrend": ([key, v])=>({
                                name: key,
                                回答数: v.ans,
                                正答率: v.ans > 0 ? Math.round(v.cor / v.ans * 100 * 100) / 100 : 0,
                                "0件割合": v.qCount > 0 ? Math.round(v.zeroCount / v.qCount * 100 * 100) / 100 : 0,
                                qCount: v.qCount
                            })
                    }["SpaceQuizPage.useEffect.quizMonthlyTrend"]);
                    const quizWeeklyTrend = Array.from(quizWeeklyMap.entries()).sort({
                        "SpaceQuizPage.useEffect.quizWeeklyTrend": (a, b)=>a[0].localeCompare(b[0])
                    }["SpaceQuizPage.useEffect.quizWeeklyTrend"]).map({
                        "SpaceQuizPage.useEffect.quizWeeklyTrend": ([key, v])=>({
                                name: v.label,
                                回答数: v.ans,
                                正答率: v.ans > 0 ? Math.round(v.cor / v.ans * 100 * 100) / 100 : 0,
                                "0件割合": v.qCount > 0 ? Math.round(v.zeroCount / v.qCount * 100 * 100) / 100 : 0,
                                qCount: v.qCount
                            })
                    }["SpaceQuizPage.useEffect.quizWeeklyTrend"]);
                    const quizMonthlyTable = [
                        ...quizMonthlyTrend
                    ].reverse();
                    const quizWeeklyTable = [
                        ...quizWeeklyTrend
                    ].reverse();
                    // --- 種別パフォーマンス表のデータ生成 ---
                    const buildTypeTable = {
                        "SpaceQuizPage.useEffect.buildTypeTable": (aggMap)=>{
                            return Array.from(aggMap.entries()).filter({
                                "SpaceQuizPage.useEffect.buildTypeTable": ([t])=>t !== "未分類"
                            }["SpaceQuizPage.useEffect.buildTypeTable"]).map({
                                "SpaceQuizPage.useEffect.buildTypeTable": ([type, o])=>({
                                        type,
                                        qCount: o.qCount,
                                        sumAns: o.ans,
                                        avgAns: o.qCount > 0 ? o.ans / o.qCount : 0,
                                        accuracy: o.ans > 0 ? `${Math.round(o.cor / o.ans * 100 * 100) / 100}%` : "0%",
                                        zeroRate: o.qCount > 0 ? `${Math.round(o.zeroCount / o.qCount * 100 * 100) / 100}%` : "0%"
                                    })
                            }["SpaceQuizPage.useEffect.buildTypeTable"]).sort({
                                "SpaceQuizPage.useEffect.buildTypeTable": (a, b)=>b.qCount - a.qCount
                            }["SpaceQuizPage.useEffect.buildTypeTable"]);
                        }
                    }["SpaceQuizPage.useEffect.buildTypeTable"];
                    const overallTypeTable = buildTypeTable(typeStatsOverall);
                    const currentMonthKey = `${currentY}/${String(currentM).padStart(2, "0")}`;
                    const thisMonthTypeTable = typeStatsMonthly.has(currentMonthKey) ? buildTypeTable(typeStatsMonthly.get(currentMonthKey)) : [];
                    const thisWeekEnd = new Date(startOfWeekJst.getTime());
                    thisWeekEnd.setDate(thisWeekEnd.getDate() + 6);
                    const currentWeekKey = `${thisWeekEnd.getFullYear()}/${String(thisWeekEnd.getMonth() + 1).padStart(2, "0")}/${String(thisWeekEnd.getDate()).padStart(2, "0")}`;
                    const thisWeekTypeTable = typeStatsWeekly.has(currentWeekKey) ? buildTypeTable(typeStatsWeekly.get(currentWeekKey)) : [];
                    const typeDistribution = Array.from(typeCounts.entries()).filter({
                        "SpaceQuizPage.useEffect.typeDistribution": ([name])=>name !== "未分類"
                    }["SpaceQuizPage.useEffect.typeDistribution"]).sort({
                        "SpaceQuizPage.useEffect.typeDistribution": (a, b)=>b[1] - a[1]
                    }["SpaceQuizPage.useEffect.typeDistribution"]).map({
                        "SpaceQuizPage.useEffect.typeDistribution": ([name, value], i)=>({
                                name,
                                value,
                                color: TYPE_COLORS[i % TYPE_COLORS.length]
                            })
                    }["SpaceQuizPage.useEffect.typeDistribution"]);
                    const platformDistribution = [
                        {
                            name: "Discord",
                            value: sumDiscord,
                            color: "#5865F2"
                        },
                        {
                            name: "X",
                            value: sumX,
                            color: "#1DA1F2"
                        },
                        {
                            name: "Instagram",
                            value: sumInstagram,
                            color: "#E4405F"
                        },
                        {
                            name: "マイコミュ",
                            value: sumMyCom,
                            color: "#F59E0B"
                        }
                    ].filter({
                        "SpaceQuizPage.useEffect.platformDistribution": (item)=>item.value > 0
                    }["SpaceQuizPage.useEffect.platformDistribution"]).sort({
                        "SpaceQuizPage.useEffect.platformDistribution": (a, b)=>b.value - a.value
                    }["SpaceQuizPage.useEffect.platformDistribution"]);
                    const difficultyGroups = [
                        {
                            range: "0-20%",
                            min: 0,
                            max: 20,
                            count: 0,
                            totalAns: 0,
                            totalAcc: 0
                        },
                        {
                            range: "21-40%",
                            min: 21,
                            max: 40,
                            count: 0,
                            totalAns: 0,
                            totalAcc: 0
                        },
                        {
                            range: "41-60%",
                            min: 41,
                            max: 60,
                            count: 0,
                            totalAns: 0,
                            totalAcc: 0
                        },
                        {
                            range: "61-80%",
                            min: 61,
                            max: 80,
                            count: 0,
                            totalAns: 0,
                            totalAcc: 0
                        },
                        {
                            range: "81-100%",
                            min: 81,
                            max: 100,
                            count: 0,
                            totalAns: 0,
                            totalAcc: 0
                        }
                    ];
                    tableDataRaw.filter({
                        "SpaceQuizPage.useEffect": (q)=>q.answers > 5
                    }["SpaceQuizPage.useEffect"]).forEach({
                        "SpaceQuizPage.useEffect": (q)=>{
                            const group = difficultyGroups.find({
                                "SpaceQuizPage.useEffect.group": (g)=>q.accuracy >= g.min && q.accuracy <= g.max
                            }["SpaceQuizPage.useEffect.group"]);
                            if (group) {
                                group.count++;
                                group.totalAns += q.answers;
                                group.totalAcc += q.accuracy;
                            }
                        }
                    }["SpaceQuizPage.useEffect"]);
                    const difficultyTable = difficultyGroups.map({
                        "SpaceQuizPage.useEffect.difficultyTable": (g)=>({
                                range: g.range,
                                count: g.count,
                                avgAnswers: g.count > 0 ? Math.round(g.totalAns / g.count) : 0,
                                avgAccuracy: g.count > 0 ? `${Math.round(g.totalAcc / g.count)}%` : "-"
                            })
                    }["SpaceQuizPage.useEffect.difficultyTable"]);
                    const platformMetricsTable = [
                        {
                            platform: "Discord",
                            ...pStats.Discord
                        },
                        {
                            platform: "X",
                            ...pStats.X
                        },
                        {
                            platform: "Instagram",
                            ...pStats.Instagram
                        },
                        {
                            platform: "マイコミュ",
                            ...pStats.マイコミュ
                        }
                    ].map({
                        "SpaceQuizPage.useEffect.platformMetricsTable": (p)=>({
                                platform: p.platform,
                                sumAns: p.ans,
                                qCount: p.qCount,
                                zeroRate: p.qCount > 0 ? `${Math.round(p.zeroCount / p.qCount * 100 * 100) / 100}%` : "0%",
                                avgAns: p.qCount > 0 ? p.ans / p.qCount : 0,
                                accuracy: p.ans > 0 ? `${Math.round(p.cor / p.ans * 100 * 100) / 100}%` : "0%"
                            })
                    }["SpaceQuizPage.useEffect.platformMetricsTable"]);
                    const scatterMap = new Map();
                    const zeroAnswerQuestions = tableDataRaw.filter({
                        "SpaceQuizPage.useEffect.zeroAnswerQuestions": (q)=>q.answers === 0
                    }["SpaceQuizPage.useEffect.zeroAnswerQuestions"]).map({
                        "SpaceQuizPage.useEffect.zeroAnswerQuestions": (q)=>({
                                text: q.question,
                                platforms: q.platforms
                            })
                    }["SpaceQuizPage.useEffect.zeroAnswerQuestions"]);
                    if (zeroAnswerQuestions.length > 0) {
                        scatterMap.set("0-0", {
                            answers: 0,
                            accuracy: 0,
                            questions: zeroAnswerQuestions,
                            isOrigin: true
                        });
                    }
                    tableDataRaw.filter({
                        "SpaceQuizPage.useEffect": (q)=>q.answers > 0
                    }["SpaceQuizPage.useEffect"]).forEach({
                        "SpaceQuizPage.useEffect": (q)=>{
                            const key = `${q.answers}-${q.accuracy}`;
                            if (!scatterMap.has(key)) {
                                scatterMap.set(key, {
                                    answers: q.answers,
                                    accuracy: q.accuracy,
                                    questions: [
                                        {
                                            text: q.question,
                                            platforms: q.platforms
                                        }
                                    ],
                                    isOrigin: false
                                });
                            } else {
                                scatterMap.get(key).questions.push({
                                    text: q.question,
                                    platforms: q.platforms
                                });
                            }
                        }
                    }["SpaceQuizPage.useEffect"]);
                    const scatterData = Array.from(scatterMap.values());
                    const avgAnswersOverall = tableDataRaw.length > 0 ? totalAnswers / tableDataRaw.length : 0;
                    const attentionQuestions = tableDataRaw.filter({
                        "SpaceQuizPage.useEffect.attentionQuestions": (q)=>q.answers >= avgAnswersOverall && q.accuracy <= 50 && q.answers > 0
                    }["SpaceQuizPage.useEffect.attentionQuestions"]).sort({
                        "SpaceQuizPage.useEffect.attentionQuestions": (a, b)=>b.answers - a.answers
                    }["SpaceQuizPage.useEffect.attentionQuestions"]);
                    setData({
                        summary: {
                            totalParticipants: totalAnswers,
                            totalQuestions: validRows.length,
                            averageAccuracy,
                            todayAverageAccuracy,
                            weeklyAverageAccuracy,
                            monthlyAverageAccuracy,
                            averageParticipants,
                            todayAverageParticipants,
                            weeklyAverageParticipants,
                            monthlyAverageParticipants,
                            totalZeroAnswers,
                            totalZeroRate,
                            monthlyParticipants: thisMonthAnswers,
                            monthlyParticipantsRate: monthlyRate,
                            weeklyParticipants: thisWeekAnswers,
                            weeklyParticipantsRate: weeklyRate,
                            todayParticipants: todayAnswers,
                            todayParticipantsRate: todayRate,
                            zeroRateDay,
                            zeroRateWeek,
                            zeroRateMonth,
                            todayQuestions,
                            thisWeekQuestions,
                            thisMonthQuestions
                        },
                        charts: {
                            participantsTrend: trendData,
                            accuracyTrend: accuracyData,
                            platformDistribution,
                            typeDistribution,
                            scatterData,
                            activeTypes,
                            monthlyTypeTrend,
                            weeklyTypeTrend,
                            quizMonthlyTrend,
                            quizWeeklyTrend
                        },
                        tables: {
                            questionRanking: tableDataRaw,
                            difficultyTable,
                            attentionQuestions,
                            platformMetricsTable,
                            overallTypeTable,
                            thisMonthTypeTable,
                            thisWeekTypeTable,
                            quizMonthlyTable,
                            quizWeeklyTable
                        }
                    });
                }
            }["SpaceQuizPage.useEffect"]).catch({
                "SpaceQuizPage.useEffect": (err)=>console.error("CSV Fetch Error:", err)
            }["SpaceQuizPage.useEffect"]);
        }
    }["SpaceQuizPage.useEffect"], []);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                    lineNumber: 964,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "クイズデータを集計中..."
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                    lineNumber: 965,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
            lineNumber: 963,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
        lineNumber: 962,
        columnNumber: 7
    }, this);
    const { summary, charts, tables } = data;
    const sortedQuestions = [
        ...tables.questionRanking
    ].sort((a, b)=>{
        if (sortMode === "accuracy_desc") return b.accuracy - a.accuracy;
        if (sortMode === "accuracy_asc") return a.accuracy - b.accuracy;
        if (sortMode === "answers_desc") return b.answers - a.answers;
        return b.num - a.num;
    });
    const getTrendLines = (prefix)=>{
        const lines = [];
        if (visibleLines["全体"]) lines.push({
            dataKey: `${prefix}全体`,
            name: "全体",
            color: "#e879f9"
        });
        if (visibleLines["Discord"]) lines.push({
            dataKey: `${prefix}Discord`,
            name: "Discord",
            color: "#5865F2"
        });
        if (visibleLines["X"]) lines.push({
            dataKey: `${prefix}X`,
            name: "X",
            color: "#1DA1F2"
        });
        if (visibleLines["Instagram"]) lines.push({
            dataKey: `${prefix}Instagram`,
            name: "Instagram",
            color: "#E4405F"
        });
        if (visibleLines["マイコミュ"]) lines.push({
            dataKey: `${prefix}マイコミュ`,
            name: "マイコミュ",
            color: "#F59E0B"
        });
        return lines;
    };
    const getTypeTrendLines = ()=>{
        const lines = [];
        charts.activeTypes.forEach((type, i)=>{
            if (visibleTypes[type]) {
                lines.push({
                    dataKey: `${type}_${typeChartMetric}`,
                    name: type,
                    color: TYPE_COLORS[i % TYPE_COLORS.length]
                });
            }
        });
        return lines;
    };
    const metricNames = {
        qCount: "出題数",
        ans: "総回答数",
        avgAns: "平均回答数",
        accuracy: "平均正答率",
        zeroRate: "回答0件割合"
    };
    const metricUnits = {
        qCount: "問",
        ans: "件",
        avgAns: "件",
        accuracy: "%",
        zeroRate: "%"
    };
    // ★ 新設：トグルボタンの定義
    const quizMetricButtons = [
        {
            mode: "回答数",
            label: "回答数",
            color: "bg-primary",
            unit: "件"
        },
        {
            mode: "正答率",
            label: "平均正答率",
            color: "bg-success",
            unit: "%"
        },
        {
            mode: "0件割合",
            label: "回答0件割合",
            color: "bg-danger",
            unit: "%"
        }
    ];
    const typeTableData = typeTablePeriod === "overall" ? tables.overallTypeTable : typeTablePeriod === "thisMonth" ? tables.thisMonthTypeTable : tables.thisWeekTypeTable;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "宇宙クイズ分析"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1053,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "宇宙クイズの参加状況、正答率、プラットフォーム別の回答傾向を確認できます。"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1054,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1052,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/113XXwG9heW_Vv173SH_pp9w8cwRgWzC341jbXeaJ22w/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1069,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1070,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1064,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1058,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1051,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "総参加者数 (累計)",
                        value: summary.totalParticipants.toLocaleString(),
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1076,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "総出題数",
                        value: summary.totalQuestions.toLocaleString(),
                        unit: "問",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__["BookOpenText"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1083,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "平均回答数",
                        value: formatAverage(summary.averageParticipants),
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1090,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "平均正答率",
                        value: format(summary.averageAccuracy),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1097,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "累計 回答0件問題数",
                        value: summary.totalZeroAnswers.toLocaleString(),
                        unit: "問",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                        accentColor: "danger"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "累計 回答0件割合",
                        value: format(summary.totalZeroRate),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                        accentColor: "danger"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1075,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今日の参加者数",
                        value: `+${summary.todayParticipants.toLocaleString()}`,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                        accentColor: "warning"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "参加者数の前日比",
                        value: format(summary.todayParticipantsRate),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success",
                        trendValue: `前日比`,
                        trendType: "up"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今日の平均回答数",
                        value: formatAverage(summary.todayAverageParticipants),
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今日の平均正答率",
                        value: format(summary.todayAverageAccuracy),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今日の回答0件割合",
                        value: format(summary.zeroRateDay),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                        accentColor: "danger",
                        description: `出題${summary.todayQuestions}件中`
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今週の参加者数",
                        value: `+${summary.weeklyParticipants.toLocaleString()}`,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "参加者数の先週末比",
                        value: format(summary.weeklyParticipantsRate),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success",
                        trendValue: `先週末比`,
                        trendType: "up"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今週の平均回答数",
                        value: formatAverage(summary.weeklyAverageParticipants),
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今週の平均正答率",
                        value: format(summary.weeklyAverageAccuracy),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今週の回答0件割合",
                        value: format(summary.zeroRateWeek),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                        accentColor: "danger",
                        description: `出題${summary.thisWeekQuestions}件中`
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月の参加者数",
                        value: `+${summary.monthlyParticipants.toLocaleString()}`,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                        accentColor: "accent"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "参加者数の先月末比",
                        value: format(summary.monthlyParticipantsRate),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success",
                        trendValue: `先月末比`,
                        trendType: "up"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月の平均回答数",
                        value: formatAverage(summary.monthlyAverageParticipants),
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月の平均正答率",
                        value: format(summary.monthlyAverageAccuracy),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月の回答0件割合",
                        value: format(summary.zeroRateMonth),
                        unit: "%",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                        accentColor: "danger",
                        description: `出題${summary.thisMonthQuestions}件中`
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                    title: "媒体別 パフォーマンス",
                    description: "各媒体の出題数、回答0件の割合、平均回答数、平均正答率の比較",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                        columns: [
                            {
                                key: "platform",
                                label: "媒体",
                                align: "left"
                            },
                            {
                                key: "qCount",
                                label: "出題数",
                                align: "right"
                            },
                            {
                                key: "sumAns",
                                label: "総回答数",
                                align: "right"
                            },
                            {
                                key: "avgAnsStr",
                                label: "平均回答数",
                                align: "right"
                            },
                            {
                                key: "accuracy",
                                label: "正答率",
                                align: "right"
                            },
                            {
                                key: "zeroRate",
                                label: "回答0件割合",
                                align: "right"
                            }
                        ],
                        data: tables.platformMetricsTable.map((p)=>({
                                ...p,
                                avgAnsStr: formatAverage(p.avgAns)
                            }))
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1246,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                    lineNumber: 1241,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "宇宙クイズ 累計参加者数推移 (全体・媒体別)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[350px]",
                            children: getTrendLines("累計_").length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartComponent"], {
                                data: charts.participantsTrend.slice(-90),
                                lines: getTrendLines("累計_")
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1268,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground text-sm",
                                children: "表示するグラフを選択してください"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1273,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1266,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-secondary/20 p-4 rounded-2xl border border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-foreground",
                                children: "グラフの表示切り替え:"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    {
                                        key: "全体",
                                        color: "bg-[#e879f9]"
                                    },
                                    {
                                        key: "Discord",
                                        color: "bg-[#5865F2]"
                                    },
                                    {
                                        key: "X",
                                        color: "bg-[#1DA1F2]"
                                    },
                                    {
                                        key: "Instagram",
                                        color: "bg-[#E4405F]"
                                    },
                                    {
                                        key: "マイコミュ",
                                        color: "bg-[#F59E0B]"
                                    }
                                ].map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>toggleLine(btn.key),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200 border-border/50 flex items-center gap-2", visibleLines[btn.key] ? "bg-secondary/80 text-foreground" : "bg-background text-muted-foreground opacity-50"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-2.5 h-2.5 rounded-full ${btn.color}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                lineNumber: 1304,
                                                columnNumber: 17
                                            }, this),
                                            btn.key
                                        ]
                                    }, btn.key, true, {
                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                        lineNumber: 1292,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "日別 回答数推移 (全体・媒体別)",
                        description: "日ごとの回答増減の推移",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[350px]",
                            children: getTrendLines("日別_").length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$linear$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearChartComponent"], {
                                data: charts.participantsTrend.slice(-90),
                                lines: getTrendLines("日別_")
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1317,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground text-sm",
                                children: "表示するグラフを選択してください"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1322,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1315,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "全体：月別クイズ推移",
                        description: "月単位の回答数・正答率・0件割合の推移",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-4",
                                children: quizMetricButtons.map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>setMonthlyMetric(btn.mode),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200 border-border/50", monthlyMetric === btn.mode ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30 hover:bg-secondary/50 text-foreground"),
                                        children: btn.label
                                    }, btn.mode, false, {
                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                        lineNumber: 1338,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1336,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                                height: "h-[300px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$linear$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearChartComponent"], {
                                    data: charts.quizMonthlyTrend || [],
                                    lines: [
                                        {
                                            dataKey: monthlyMetric,
                                            name: monthlyMetric,
                                            color: monthlyMetric === "回答数" ? "#38BDF8" : monthlyMetric === "正答率" ? "#22C55E" : "#EF4444"
                                        }
                                    ],
                                    yAxisUnit: monthlyMetric === "回答数" ? "件" : "%"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1355,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1354,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "全体：週別クイズ推移",
                        description: "週単位の回答数・正答率・0件割合の推移 (月〜日)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-4",
                                children: quizMetricButtons.map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>setWeeklyMetric(btn.mode),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200 border-border/50", weeklyMetric === btn.mode ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30 hover:bg-secondary/50 text-foreground"),
                                        children: btn.label
                                    }, btn.mode, false, {
                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                        lineNumber: 1380,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                                height: "h-[300px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$linear$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearChartComponent"], {
                                    data: charts.quizWeeklyTrend || [],
                                    lines: [
                                        {
                                            dataKey: weeklyMetric,
                                            name: weeklyMetric,
                                            color: weeklyMetric === "回答数" ? "#38BDF8" : weeklyMetric === "正答率" ? "#22C55E" : "#EF4444"
                                        }
                                    ],
                                    yAxisUnit: weeklyMetric === "回答数" ? "件" : "%"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1397,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1374,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月別クイズ状況一覧テーブル",
                        description: "全体パフォーマンスの月次データ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "month",
                                    label: "月",
                                    align: "left"
                                },
                                {
                                    key: "qCountStr",
                                    label: "出題数",
                                    align: "right"
                                },
                                {
                                    key: "answersStr",
                                    label: "総回答数",
                                    align: "right"
                                },
                                {
                                    key: "accuracyStr",
                                    label: "平均正答率",
                                    align: "right"
                                },
                                {
                                    key: "zeroRateStr",
                                    label: "回答0件割合",
                                    align: "right"
                                }
                            ],
                            data: (tables.quizMonthlyTable || []).map((row)=>({
                                    ...row,
                                    month: row.name,
                                    qCountStr: `${row.qCount}問`,
                                    answersStr: `${row.回答数.toLocaleString()}件`,
                                    accuracyStr: `${row.正答率}%`,
                                    zeroRateStr: `${row["0件割合"]}%`
                                }))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1423,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1419,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "週別クイズ状況一覧テーブル",
                        description: "全体パフォーマンスの週次データ (月〜日)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "week",
                                    label: "週 (月〜日)",
                                    align: "left"
                                },
                                {
                                    key: "qCountStr",
                                    label: "出題数",
                                    align: "right"
                                },
                                {
                                    key: "answersStr",
                                    label: "総回答数",
                                    align: "right"
                                },
                                {
                                    key: "accuracyStr",
                                    label: "平均正答率",
                                    align: "right"
                                },
                                {
                                    key: "zeroRateStr",
                                    label: "回答0件割合",
                                    align: "right"
                                }
                            ],
                            data: (tables.quizWeeklyTable || []).map((row)=>({
                                    ...row,
                                    week: row.name,
                                    qCountStr: `${row.qCount}問`,
                                    answersStr: `${row.回答数.toLocaleString()}件`,
                                    accuracyStr: `${row.正答率}%`,
                                    zeroRateStr: `${row["0件割合"]}%`
                                }))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1446,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1442,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "クイズ種別 パフォーマンス一覧",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground mr-1",
                                        children: "集計期間:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                        lineNumber: 1470,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        {
                                            key: "overall",
                                            label: "累計"
                                        },
                                        {
                                            key: "thisMonth",
                                            label: "今月"
                                        },
                                        {
                                            key: "thisWeek",
                                            label: "今週"
                                        }
                                    ].map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>setTypeTablePeriod(btn.key),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200", typeTablePeriod === btn.key ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground"),
                                            children: btn.label
                                        }, btn.key, false, {
                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                            lineNumber: 1478,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full overflow-x-auto mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "text-xs text-muted-foreground bg-secondary/50 border-b border-border/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 font-medium text-left whitespace-nowrap",
                                                        children: "種別"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1499,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 font-medium text-right whitespace-nowrap",
                                                        children: "出題数"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1502,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 font-medium text-right whitespace-nowrap",
                                                        children: "総回答数"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1505,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 font-medium text-right whitespace-nowrap",
                                                        children: "平均回答数"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1508,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 font-medium text-right whitespace-nowrap",
                                                        children: "平均正答率"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1511,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 font-medium text-right whitespace-nowrap",
                                                        children: "回答0件割合"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                lineNumber: 1498,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                            lineNumber: 1497,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-border/50",
                                            children: [
                                                typeTableData.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-secondary/20 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 font-medium text-foreground whitespace-nowrap",
                                                                children: d.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                                lineNumber: 1525,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-right text-muted-foreground whitespace-nowrap",
                                                                children: d.qCount?.toLocaleString() || 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                                lineNumber: 1528,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-right text-muted-foreground whitespace-nowrap",
                                                                children: d.sumAns?.toLocaleString() || 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                                lineNumber: 1531,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-right text-foreground font-medium whitespace-nowrap",
                                                                children: formatAverage(d.avgAns)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                                lineNumber: 1534,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-right text-foreground font-medium whitespace-nowrap",
                                                                children: d.accuracy
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                                lineNumber: 1537,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-right text-muted-foreground whitespace-nowrap",
                                                                children: d.zeroRate
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                                lineNumber: 1540,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1521,
                                                        columnNumber: 19
                                                    }, this)),
                                                typeTableData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 6,
                                                        className: "px-4 py-8 text-center text-muted-foreground",
                                                        children: "データがありません"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1547,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                    lineNumber: 1546,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                            lineNumber: 1519,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1496,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "クイズ種別 ごとの推移グラフ",
                        description: "月別・週別での各指標の変化を比較できます",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 mb-6 bg-secondary/20 p-4 rounded-2xl border border-border/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4 items-start sm:items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-foreground",
                                                        children: "期間:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1567,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "sm",
                                                        onClick: ()=>setTypeChartPeriod("monthly"),
                                                        className: typeChartPeriod === "monthly" ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30",
                                                        children: "月別"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1568,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "sm",
                                                        onClick: ()=>setTypeChartPeriod("weekly"),
                                                        className: typeChartPeriod === "weekly" ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30",
                                                        children: "週別"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1580,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                lineNumber: 1566,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-foreground ml-2",
                                                        children: "指標:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                        lineNumber: 1594,
                                                        columnNumber: 17
                                                    }, this),
                                                    Object.entries(metricNames).map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: ()=>setTypeChartMetric(key),
                                                            className: typeChartMetric === key ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30",
                                                            children: label
                                                        }, key, false, {
                                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                            lineNumber: 1598,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                lineNumber: 1593,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                        lineNumber: 1565,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 pt-2 border-t border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold text-foreground mt-1.5 mr-1",
                                                children: "種別の表示:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                lineNumber: 1616,
                                                columnNumber: 15
                                            }, this),
                                            charts.activeTypes.map((type, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>toggleTypeLine(type),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200 border-border/50 flex items-center gap-2", visibleTypes[type] ? "bg-secondary/80 text-foreground" : "bg-background text-muted-foreground opacity-50"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2.5 h-2.5 rounded-full",
                                                            style: {
                                                                backgroundColor: TYPE_COLORS[i % TYPE_COLORS.length]
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                            lineNumber: 1632,
                                                            columnNumber: 19
                                                        }, this),
                                                        type
                                                    ]
                                                }, type, true, {
                                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                                    lineNumber: 1620,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                        lineNumber: 1615,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1564,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                                height: "h-[400px]",
                                children: getTypeTrendLines().length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$linear$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearChartComponent"], {
                                    data: typeChartPeriod === "monthly" ? charts.monthlyTypeTrend.slice(-12) : charts.weeklyTypeTrend.slice(-12),
                                    lines: getTypeTrendLines(),
                                    yAxisUnit: metricUnits[typeChartMetric]
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1646,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full items-center justify-center text-muted-foreground text-sm",
                                    children: "表示する種別を選択してください"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1656,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1644,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1560,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1467,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "クイズ種別 割合",
                        description: "検定に向けた問題カテゴリの分布",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: charts.typeDistribution.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.typeDistribution,
                                centerLabel: "問題数"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1671,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1673,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1669,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1665,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "プラットフォーム別 回答割合",
                        description: "各SNS・コミュニティからの回答比率",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: charts.platformDistribution.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.platformDistribution,
                                centerLabel: "回答"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1685,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1690,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1683,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1679,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1664,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "回答人数と正答率の分布図",
                description: "右に行くほど回答数が多く、上に行くほど正答率が高い問題です。点にマウスを乗せてクリックすると重なっている問題が全件表示されます。",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                    height: "h-[400px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: "100%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScatterChart"], {
                            margin: {
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "rgba(255,255,255,0.1)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1705,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                    type: "number",
                                    dataKey: "answers",
                                    name: "回答数",
                                    stroke: "#888",
                                    tick: {
                                        fill: "#888"
                                    },
                                    label: {
                                        value: "回答数",
                                        position: "insideBottomRight",
                                        offset: -10,
                                        fill: "#888"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1709,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                    type: "number",
                                    dataKey: "accuracy",
                                    name: "正答率",
                                    unit: "%",
                                    stroke: "#888",
                                    tick: {
                                        fill: "#888"
                                    },
                                    domain: [
                                        0,
                                        100
                                    ],
                                    label: {
                                        value: "正答率(%)",
                                        angle: -90,
                                        position: "insideLeft",
                                        fill: "#888"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1722,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZAxis"], {
                                    type: "number",
                                    range: [
                                        100,
                                        100
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1737,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    cursor: {
                                        strokeDasharray: "3 3"
                                    },
                                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScatterTooltip, {}, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                        lineNumber: 1740,
                                        columnNumber: 26
                                    }, this),
                                    wrapperStyle: {
                                        pointerEvents: "auto",
                                        zIndex: 100
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1738,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                                    name: "問題",
                                    data: charts.scatterData,
                                    fill: "#38BDF8",
                                    opacity: 0.8,
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: (data)=>setSelectedDot(data),
                                    shape: (props)=>{
                                        const { cx, cy } = props;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: cx,
                                            cy: cy,
                                            r: 6,
                                            fill: "#38BDF8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                            lineNumber: 1752,
                                            columnNumber: 26
                                        }, this);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1743,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1704,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1703,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                    lineNumber: 1702,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1698,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "難易度別 分析",
                        description: "正答率20%ごとの集計（※回答5件以下の問題は除外）",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "range",
                                    label: "正答率の帯",
                                    align: "left"
                                },
                                {
                                    key: "count",
                                    label: "問題数",
                                    align: "right"
                                },
                                {
                                    key: "avgAnswers",
                                    label: "平均回答数",
                                    align: "right"
                                },
                                {
                                    key: "avgAccuracy",
                                    label: "平均正答率",
                                    align: "right"
                                }
                            ],
                            data: tables.difficultyTable
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1765,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1761,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "要注意問題リスト",
                        description: "回答数が平均以上で、正答率が50%以下のつまずきやすい問題",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "question",
                                    label: "問題名",
                                    align: "left"
                                },
                                {
                                    key: "platformsNode",
                                    label: "出題媒体",
                                    align: "left"
                                },
                                {
                                    key: "answers",
                                    label: "回答数",
                                    align: "right"
                                },
                                {
                                    key: "accuracyStr",
                                    label: "正答率",
                                    align: "right"
                                }
                            ],
                            data: tables.attentionQuestions.map((q)=>({
                                    ...q,
                                    accuracyStr: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-danger font-semibold",
                                        children: [
                                            q.accuracy,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                        lineNumber: 1791,
                                        columnNumber: 17
                                    }, this),
                                    platformsNode: renderPlatformBadges(q.platforms)
                                }))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1781,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1776,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1760,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "問題別 回答データ一覧",
                description: "各問題の回答数と正答率（ボタンで並び替え可能）",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-end gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground mr-1",
                                children: "並び順:"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1804,
                                columnNumber: 11
                            }, this),
                            [
                                {
                                    mode: "date_desc",
                                    label: "新着順"
                                },
                                {
                                    mode: "answers_desc",
                                    label: "回答数順"
                                },
                                {
                                    mode: "accuracy_desc",
                                    label: "正答率 (高)"
                                },
                                {
                                    mode: "accuracy_asc",
                                    label: "正答率 (低)"
                                }
                            ].map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>setSortMode(btn.mode),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200", sortMode === btn.mode ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground"),
                                    children: [
                                        btn.mode !== "date_desc" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                            className: "h-3 w-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                            lineNumber: 1824,
                                            columnNumber: 17
                                        }, this),
                                        btn.label
                                    ]
                                }, btn.mode, true, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1811,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1803,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                        columns: [
                            {
                                key: "rank",
                                label: "順位",
                                align: "center"
                            },
                            {
                                key: "question",
                                label: "問題名",
                                align: "left"
                            },
                            {
                                key: "platformsNode",
                                label: "出題媒体",
                                align: "left"
                            },
                            {
                                key: "answers",
                                label: "回答数",
                                align: "right"
                            },
                            {
                                key: "correct",
                                label: "正解数",
                                align: "right"
                            },
                            {
                                key: "accuracyStr",
                                label: "正答率",
                                align: "right"
                            }
                        ],
                        data: sortedQuestions.map((q, i)=>({
                                ...q,
                                rank: sortMode === "date_desc" ? "-" : i + 1,
                                answers: q.answers.toLocaleString(),
                                correct: q.correct.toLocaleString(),
                                accuracyStr: `${q.accuracy}%`,
                                platformsNode: renderPlatformBadges(q.platforms)
                            }))
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                        lineNumber: 1830,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1799,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!selectedDot,
                onOpenChange: (open)=>!open && setSelectedDot(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "glass-card border-border/50 max-w-md max-h-[80vh] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "重なっている問題一覧"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                lineNumber: 1856,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1855,
                            columnNumber: 11
                        }, this),
                        selectedDot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-2 pb-3 border-b border-border/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#38BDF8] text-sm font-bold",
                                            children: [
                                                "回答数: ",
                                                selectedDot.answers,
                                                "件"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                            lineNumber: 1861,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#8B5CF6] text-sm font-bold",
                                            children: [
                                                "正答率: ",
                                                selectedDot.accuracy,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                            lineNumber: 1864,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1860,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm font-bold",
                                    children: [
                                        "計 ",
                                        selectedDot.questions.length,
                                        " 問"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1868,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1859,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-2",
                            children: selectedDot?.questions.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-secondary/30 rounded-lg border border-border/30 flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground font-medium text-sm leading-snug",
                                            children: q.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                            lineNumber: 1879,
                                            columnNumber: 17
                                        }, this),
                                        renderPlatformBadges(q.platforms)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                                    lineNumber: 1875,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                            lineNumber: 1873,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                    lineNumber: 1854,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
                lineNumber: 1850,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/quiz-page.tsx",
        lineNumber: 1050,
        columnNumber: 5
    }, this);
}
_s(SpaceQuizPage, "6XO4IBWRuUtlR4Q4T5zX96T18Q0=");
_c1 = SpaceQuizPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScatterTooltip");
__turbopack_context__.k.register(_c1, "SpaceQuizPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/cbed-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CBEDPage",
    ()=>CBEDPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-off.js [app-client] (ecmascript) <export default as CalendarOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/chart-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/scrollable-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ranking$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/ranking-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/donut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$japan$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/japan-map.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const getJSTDate = ()=>new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tokyo"
    }));
const REGION_MAP = {
    北海道: "北海道",
    青森: "東北",
    岩手: "東北",
    宮城: "東北",
    秋田: "東北",
    山形: "東北",
    福島: "東北",
    茨城: "関東",
    栃木: "関東",
    群馬: "関東",
    埼玉: "関東",
    千葉: "関東",
    東京: "関東",
    神奈川: "関東",
    新潟: "中部",
    富山: "中部",
    石川: "中部",
    福井: "中部",
    山梨: "中部",
    長野: "中部",
    岐阜: "中部",
    静岡: "中部",
    愛知: "中部",
    三重: "近畿",
    滋賀: "近畿",
    京都: "近畿",
    大阪: "近畿",
    兵庫: "近畿",
    奈良: "近畿",
    和歌山: "近畿",
    鳥取: "中国",
    島根: "中国",
    岡山: "中国",
    広島: "中国",
    山口: "中国",
    徳島: "四国",
    香川: "四国",
    愛媛: "四国",
    高知: "四国",
    福岡: "九州・沖縄",
    佐賀: "九州・沖縄",
    長崎: "九州・沖縄",
    熊本: "九州・沖縄",
    大分: "九州・沖縄",
    宮崎: "九州・沖縄",
    鹿児島: "九州・沖縄",
    沖縄: "九州・沖縄"
};
const REGION_COLOR_MAP = {
    北海道: "#38BDF8",
    東北: "#8B5CF6",
    関東: "#22C55E",
    中部: "#F59E0B",
    近畿: "#EF4444",
    中国: "#EC4899",
    四国: "#10B981",
    "九州・沖縄": "#F43F5E",
    オンライン: "#06B6D4",
    その他: "#6B7280"
};
const MONTH_COLORS = [
    "#38BDF8",
    "#8B5CF6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
    "#10B981",
    "#f43f5e",
    "#0ea5e9",
    "#84cc16",
    "#eab308",
    "#a855f7"
];
const getMonthColor = (monthLabel)=>{
    const m = parseInt(monthLabel, 10);
    return !isNaN(m) && m >= 1 && m <= 12 ? MONTH_COLORS[m - 1] : "#6B7280";
};
const PREFECTURES_FULL = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県"
];
function CBEDPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prefSortMode, setPrefSortMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("listings");
    // ★ マップとランキングの表示切り替えステート
    const [mapViewMode, setMapViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("total");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CBEDPage.useEffect": ()=>{
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJU_Qq6TICMIAhDidiH2BYlBcZBvS_Uwy4wth9tT-02RYWkVP_AufdGo0PMAbAyrHKeZrE1x0laETY/pub?gid=0&single=true&output=csv";
            fetch(csvUrl).then({
                "CBEDPage.useEffect": (response)=>response.text()
            }["CBEDPage.useEffect"]).then({
                "CBEDPage.useEffect": (csvText)=>{
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                        skipEmptyLines: true
                    });
                    const rawData = parsed.data;
                    const headerRowIndex = rawData.findIndex({
                        "CBEDPage.useEffect.headerRowIndex": (row)=>row.includes("title") || row.includes("location")
                    }["CBEDPage.useEffect.headerRowIndex"]);
                    if (headerRowIndex === -1) return;
                    const headers = rawData[headerRowIndex];
                    const titleIdx = headers.indexOf("title") !== -1 ? headers.indexOf("title") : 1;
                    const dateIdx = headers.indexOf("date") !== -1 ? headers.indexOf("date") : 2;
                    const latIdx = headers.indexOf("lat") !== -1 ? headers.indexOf("lat") : 6;
                    const lngIdx = headers.indexOf("lng") !== -1 ? headers.indexOf("lng") : 7;
                    let prefIdx = headers.indexOf("都道府県");
                    if (prefIdx === -1) prefIdx = 16;
                    let updateIdx = headers.indexOf("更新日時");
                    if (updateIdx === -1) updateIdx = headers.indexOf("updatedAt");
                    if (updateIdx === -1) updateIdx = 17;
                    const validRows = rawData.slice(headerRowIndex + 1).filter({
                        "CBEDPage.useEffect.validRows": (row)=>row[titleIdx] && String(row[titleIdx]).trim() !== ""
                    }["CBEDPage.useEffect.validRows"]);
                    if (validRows.length === 0) return;
                    const now = getJSTDate();
                    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
                    let upcomingCount = 0, onlineCount = 0, offlineCount = 0, todayUpdateCount = 0;
                    const regionCounts = new Map();
                    const prefCounts = new Map();
                    const monthCounts = new Map();
                    const upcomingRegionCounts = new Map();
                    const upcomingMonthCounts = new Map();
                    PREFECTURES_FULL.forEach({
                        "CBEDPage.useEffect": (pref)=>{
                            let cleanPref = pref.replace(/(都|府|県)$/, "");
                            if (cleanPref === "北海") cleanPref = "北海道";
                            prefCounts.set(pref, {
                                total: 0,
                                upcoming: 0,
                                completed: 0,
                                region: REGION_MAP[cleanPref]
                            });
                        }
                    }["CBEDPage.useEffect"]);
                    let currentMonthCount = 0;
                    let prevMonthCount = 0;
                    const currentMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
                    const prevMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
                    const prevMonthStr = `${prevMonthDate.getFullYear()}-${String(prevMonthDate.getMonth() + 1).padStart(2, "0")}`;
                    validRows.forEach({
                        "CBEDPage.useEffect": (row)=>{
                            const updateStr = String(row[updateIdx] || "").trim();
                            if (updateStr) {
                                const updateDate = new Date(updateStr.replace(/\//g, "-"));
                                if (!isNaN(updateDate.getTime()) && updateDate.getTime() >= startOfToday.getTime()) {
                                    todayUpdateCount++;
                                }
                            }
                            const eventDateStr = String(row[dateIdx] || "").replace(/\//g, "-");
                            let isUpcoming = false;
                            let monthLabel = "未定";
                            if (eventDateStr) {
                                const eventDate = new Date(eventDateStr);
                                if (!isNaN(eventDate.getTime())) {
                                    isUpcoming = eventDate >= now;
                                    const ym = `${eventDate.getFullYear()}-${String(eventDate.getMonth() + 1).padStart(2, "0")}`;
                                    monthLabel = `${eventDate.getMonth() + 1}月`;
                                    if (ym === currentMonthStr) currentMonthCount++;
                                    if (ym === prevMonthStr) prevMonthCount++;
                                }
                            }
                            monthCounts.set(monthLabel, (monthCounts.get(monthLabel) || 0) + 1);
                            const isOnline = String(row[latIdx] || "").trim() === "" && String(row[lngIdx] || "").trim() === "";
                            let region = "その他";
                            if (isOnline) {
                                onlineCount++;
                                if (!regionCounts.has("オンライン")) regionCounts.set("オンライン", {
                                    total: 0,
                                    upcoming: 0,
                                    completed: 0
                                });
                                const rData = regionCounts.get("オンライン");
                                rData.total++;
                                if (isUpcoming) rData.upcoming++;
                                else rData.completed++;
                            } else {
                                offlineCount++;
                                const rawPref = String(row[prefIdx] || "").trim();
                                let cleanPref = rawPref.replace(/(都|府|県)$/, "");
                                if (cleanPref === "北海") cleanPref = "北海道";
                                region = REGION_MAP[cleanPref] || "その他";
                                const displayPref = PREFECTURES_FULL.find({
                                    "CBEDPage.useEffect": (p)=>p.startsWith(cleanPref)
                                }["CBEDPage.useEffect"]) || (rawPref ? rawPref : "未設定");
                                if (!regionCounts.has(region)) regionCounts.set(region, {
                                    total: 0,
                                    upcoming: 0,
                                    completed: 0
                                });
                                const rData = regionCounts.get(region);
                                rData.total++;
                                if (isUpcoming) rData.upcoming++;
                                else rData.completed++;
                                if (!prefCounts.has(displayPref)) prefCounts.set(displayPref, {
                                    total: 0,
                                    upcoming: 0,
                                    completed: 0,
                                    region
                                });
                                const pData = prefCounts.get(displayPref);
                                pData.total++;
                                if (isUpcoming) pData.upcoming++;
                                else pData.completed++;
                            }
                            if (isUpcoming) {
                                upcomingCount++;
                                upcomingMonthCounts.set(monthLabel, (upcomingMonthCounts.get(monthLabel) || 0) + 1);
                                if (isOnline) {
                                    upcomingRegionCounts.set("オンライン", (upcomingRegionCounts.get("オンライン") || 0) + 1);
                                } else {
                                    upcomingRegionCounts.set(region, (upcomingRegionCounts.get(region) || 0) + 1);
                                }
                            }
                        }
                    }["CBEDPage.useEffect"]);
                    const regionDistribution = Array.from(regionCounts.entries()).map({
                        "CBEDPage.useEffect.regionDistribution": ([name, data])=>({
                                name,
                                value: data.total,
                                color: REGION_COLOR_MAP[name] || "#6B7280"
                            })
                    }["CBEDPage.useEffect.regionDistribution"]).sort({
                        "CBEDPage.useEffect.regionDistribution": (a, b)=>b.value - a.value
                    }["CBEDPage.useEffect.regionDistribution"]);
                    const monthlyDistribution = Array.from(monthCounts.entries()).filter({
                        "CBEDPage.useEffect.monthlyDistribution": ([name])=>name !== "未定"
                    }["CBEDPage.useEffect.monthlyDistribution"]).map({
                        "CBEDPage.useEffect.monthlyDistribution": ([name, value])=>({
                                name,
                                value,
                                color: getMonthColor(name)
                            })
                    }["CBEDPage.useEffect.monthlyDistribution"]).sort({
                        "CBEDPage.useEffect.monthlyDistribution": (a, b)=>(parseInt(a.name) || 0) - (parseInt(b.name) || 0)
                    }["CBEDPage.useEffect.monthlyDistribution"]);
                    const upcomingRegionDistribution = Array.from(upcomingRegionCounts.entries()).map({
                        "CBEDPage.useEffect.upcomingRegionDistribution": ([name, value])=>({
                                name,
                                value,
                                color: REGION_COLOR_MAP[name] || "#6B7280"
                            })
                    }["CBEDPage.useEffect.upcomingRegionDistribution"]).sort({
                        "CBEDPage.useEffect.upcomingRegionDistribution": (a, b)=>b.value - a.value
                    }["CBEDPage.useEffect.upcomingRegionDistribution"]);
                    const upcomingMonthDistribution = Array.from(upcomingMonthCounts.entries()).filter({
                        "CBEDPage.useEffect.upcomingMonthDistribution": ([name])=>name !== "未定"
                    }["CBEDPage.useEffect.upcomingMonthDistribution"]).map({
                        "CBEDPage.useEffect.upcomingMonthDistribution": ([name, value])=>({
                                name,
                                value,
                                color: getMonthColor(name)
                            })
                    }["CBEDPage.useEffect.upcomingMonthDistribution"]).sort({
                        "CBEDPage.useEffect.upcomingMonthDistribution": (a, b)=>(parseInt(a.name) || 0) - (parseInt(b.name) || 0)
                    }["CBEDPage.useEffect.upcomingMonthDistribution"]);
                    // ★ ランキング生成用データ（全件・未開催・開催済の切り替えに対応するため、全てのデータを保持）
                    const regionRankingData = Array.from(regionCounts.entries()).filter({
                        "CBEDPage.useEffect.regionRankingData": ([name])=>name !== "オンライン" && name !== "その他"
                    }["CBEDPage.useEffect.regionRankingData"]);
                    const prefRankingData = Array.from(prefCounts.entries()).filter({
                        "CBEDPage.useEffect.prefRankingData": ([name])=>name !== "未設定"
                    }["CBEDPage.useEffect.prefRankingData"]);
                    const prefectureTableRaw = Array.from(prefCounts.entries()).map({
                        "CBEDPage.useEffect.prefectureTableRaw": ([prefecture, data])=>({
                                prefecture,
                                region: data.region,
                                listings: data.total,
                                upcoming: data.upcoming,
                                completed: data.completed
                            })
                    }["CBEDPage.useEffect.prefectureTableRaw"]);
                    const onlineTable = [
                        {
                            category: "オンラインイベント全体",
                            listings: onlineCount,
                            upcoming: validRows.filter({
                                "CBEDPage.useEffect": (r)=>String(r[latIdx]).trim() === "" && String(r[lngIdx]).trim() === "" && new Date(String(r[dateIdx]).replace(/\//g, "-")) >= now
                            }["CBEDPage.useEffect"]).length,
                            completed: validRows.filter({
                                "CBEDPage.useEffect": (r)=>String(r[latIdx]).trim() === "" && String(r[lngIdx]).trim() === "" && new Date(String(r[dateIdx]).replace(/\//g, "-")) < now
                            }["CBEDPage.useEffect"]).length
                        }
                    ];
                    setData({
                        summary: {
                            totalListings: validRows.length,
                            upcomingListings: upcomingCount,
                            offlineListings: offlineCount,
                            onlineListings: onlineCount,
                            monthlyIncrease: currentMonthCount - prevMonthCount,
                            todayUpdateCount,
                            offlineCount
                        },
                        charts: {
                            regionDistribution,
                            monthlyDistribution,
                            upcomingRegionDistribution,
                            upcomingMonthDistribution
                        },
                        rankingsData: {
                            regionRankingData,
                            prefRankingData
                        },
                        tables: {
                            prefectureTableRaw,
                            onlineTable
                        }
                    });
                }
            }["CBEDPage.useEffect"]).catch({
                "CBEDPage.useEffect": (err)=>console.error("CSV Fetch Error:", err)
            }["CBEDPage.useEffect"]);
        }
    }["CBEDPage.useEffect"], []);
    const sortedPrefectureTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CBEDPage.useMemo[sortedPrefectureTable]": ()=>{
            if (!data || !data.tables.prefectureTableRaw) return [];
            const table = [
                ...data.tables.prefectureTableRaw
            ];
            const undefinedItems = table.filter({
                "CBEDPage.useMemo[sortedPrefectureTable].undefinedItems": (t)=>!PREFECTURES_FULL.includes(t.prefecture) && t.listings > 0
            }["CBEDPage.useMemo[sortedPrefectureTable].undefinedItems"]);
            const validItems = table.filter({
                "CBEDPage.useMemo[sortedPrefectureTable].validItems": (t)=>PREFECTURES_FULL.includes(t.prefecture)
            }["CBEDPage.useMemo[sortedPrefectureTable].validItems"]);
            if (prefSortMode === "north") {
                validItems.sort({
                    "CBEDPage.useMemo[sortedPrefectureTable]": (a, b)=>PREFECTURES_FULL.indexOf(a.prefecture) - PREFECTURES_FULL.indexOf(b.prefecture)
                }["CBEDPage.useMemo[sortedPrefectureTable]"]);
            } else {
                validItems.sort({
                    "CBEDPage.useMemo[sortedPrefectureTable]": (a, b)=>{
                        if (b[prefSortMode] !== a[prefSortMode]) return b[prefSortMode] - a[prefSortMode];
                        return PREFECTURES_FULL.indexOf(a.prefecture) - PREFECTURES_FULL.indexOf(b.prefecture);
                    }
                }["CBEDPage.useMemo[sortedPrefectureTable]"]);
            }
            return [
                ...validItems,
                ...undefinedItems
            ];
        }
    }["CBEDPage.useMemo[sortedPrefectureTable]"], [
        data,
        prefSortMode
    ]);
    // ★ マップとランキングのデータを動的に生成する
    const displayRankings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CBEDPage.useMemo[displayRankings]": ()=>{
            if (!data || !data.rankingsData) return {
                region: [],
                pref: [],
                mapData: []
            };
            const key = mapViewMode === "total" ? "total" : mapViewMode === "upcoming" ? "upcoming" : "completed";
            // 地方ランキング
            const region = data.rankingsData.regionRankingData.map({
                "CBEDPage.useMemo[displayRankings].region": ([name, counts])=>({
                        name,
                        count: counts[key]
                    })
            }["CBEDPage.useMemo[displayRankings].region"]).filter({
                "CBEDPage.useMemo[displayRankings].region": (r)=>r.count > 0
            }["CBEDPage.useMemo[displayRankings].region"]).sort({
                "CBEDPage.useMemo[displayRankings].region": (a, b)=>b.count - a.count
            }["CBEDPage.useMemo[displayRankings].region"]).map({
                "CBEDPage.useMemo[displayRankings].region": (r, i)=>({
                        rank: i + 1,
                        name: r.name,
                        count: r.count,
                        percentage: Math.round(r.count / data.summary.offlineCount * 100) || 0
                    })
            }["CBEDPage.useMemo[displayRankings].region"]);
            // 都道府県ランキング (※ sliceを外して全件表示に変更)
            const pref = data.rankingsData.prefRankingData.map({
                "CBEDPage.useMemo[displayRankings].pref": ([name, counts])=>({
                        name,
                        count: counts[key]
                    })
            }["CBEDPage.useMemo[displayRankings].pref"]).filter({
                "CBEDPage.useMemo[displayRankings].pref": (r)=>r.count > 0
            }["CBEDPage.useMemo[displayRankings].pref"]).sort({
                "CBEDPage.useMemo[displayRankings].pref": (a, b)=>b.count - a.count
            }["CBEDPage.useMemo[displayRankings].pref"]).map({
                "CBEDPage.useMemo[displayRankings].pref": (r, i)=>({
                        rank: i + 1,
                        name: r.name,
                        count: r.count,
                        percentage: Math.round(r.count / data.summary.offlineCount * 100) || 0
                    })
            }["CBEDPage.useMemo[displayRankings].pref"]);
            // マップ用データ
            const mapData = pref.map({
                "CBEDPage.useMemo[displayRankings].mapData": (p)=>({
                        name: p.name,
                        value: p.count
                    })
            }["CBEDPage.useMemo[displayRankings].mapData"]);
            return {
                region,
                pref,
                mapData
            };
        }
    }["CBEDPage.useMemo[displayRankings]"], [
        data,
        mapViewMode
    ]);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                    lineNumber: 519,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "CBEDデータを集計中..."
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                    lineNumber: 520,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
            lineNumber: 518,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
        lineNumber: 517,
        columnNumber: 7
    }, this);
    const { summary, charts, tables } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "CBED分析"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "掲載イベントの件数、開催形式、地域別分布を確認できます。"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 532,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1jl7DqMAcPN92p7RbMeLRE7RPuvea3j-lsAMSs8M1Xj4/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                    lineNumber: 547,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 542,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "掲載件数",
                        value: summary.totalListings.toLocaleString(),
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "未開催の掲載件数",
                        value: summary.upcomingListings,
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarOff$3e$__["CalendarOff"],
                        accentColor: "warning"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "リアル会場の掲載件数",
                        value: summary.offlineListings,
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                        accentColor: "accent"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 568,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "オンライン掲載件数",
                        value: summary.onlineListings,
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月のイベント増減",
                        value: summary.monthlyIncrease >= 0 ? `+${summary.monthlyIncrease}` : summary.monthlyIncrease,
                        unit: "件",
                        description: "先月開催数との差",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: summary.monthlyIncrease >= 0 ? "success" : "danger"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 582,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今日の更新数",
                        value: `+${summary.todayUpdateCount}`,
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                        accentColor: "warning"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "【未開催】 地方別・オンライン割合",
                        description: "これから参加できるイベントの分布",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: charts?.upcomingRegionDistribution?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.upcomingRegionDistribution,
                                centerLabel: "イベント"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 610,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 615,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 608,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "【未開催】 開催月ごとの件数割合",
                        description: "これから参加できるイベントの時期",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: charts?.upcomingMonthDistribution?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.upcomingMonthDistribution,
                                centerLabel: "イベント"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 627,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 632,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 625,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 621,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                lineNumber: 603,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "【全期間】 地方別＋オンライン割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: charts?.regionDistribution?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.regionDistribution,
                                centerLabel: "イベント"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 644,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 649,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "【全期間】 開催月ごとの件数割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: charts?.monthlyDistribution?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.monthlyDistribution,
                                centerLabel: "イベント"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 658,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 663,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 656,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 655,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                lineNumber: 640,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-secondary/20 p-4 rounded-2xl border border-border/50 flex flex-wrap gap-2 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-bold text-foreground mr-2",
                        children: "表示データの切り替え:"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 673,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            key: "total",
                            label: "総件数"
                        },
                        {
                            key: "upcoming",
                            label: "未開催"
                        },
                        {
                            key: "completed",
                            label: "開催済"
                        }
                    ].map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>setMapViewMode(btn.key),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200", mapViewMode === btn.key ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground"),
                            children: btn.label
                        }, btn.key, false, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 681,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                lineNumber: 672,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: `地方別掲載件数ランキング (${mapViewMode === "total" ? "総件数" : mapViewMode === "upcoming" ? "未開催" : "開催済"})`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[400px] overflow-y-auto custom-scrollbar pr-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ranking$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RankingList"], {
                                items: displayRankings.region
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 704,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 703,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 699,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: `都道府県別掲載件数ランキング (${mapViewMode === "total" ? "総件数" : mapViewMode === "upcoming" ? "未開催" : "開催済"})`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[400px] overflow-y-auto custom-scrollbar pr-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ranking$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RankingList"], {
                                items: displayRankings.pref
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 712,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 711,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 707,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: `都道府県別 イベント分布ヒートマップ (${mapViewMode === "total" ? "総件数" : mapViewMode === "upcoming" ? "未開催" : "開催済"})`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[400px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$japan$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JapanMap"], {
                                data: displayRankings.mapData,
                                colorMax: "#22C55E"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 720,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 719,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 716,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                lineNumber: 698,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "都道府県別 イベント掲載件数",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-end gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground mr-1",
                                        children: "並び順:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                        lineNumber: 728,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        {
                                            mode: "north",
                                            label: "北から"
                                        },
                                        {
                                            mode: "listings",
                                            label: "総件数"
                                        },
                                        {
                                            mode: "upcoming",
                                            label: "未開催"
                                        },
                                        {
                                            mode: "completed",
                                            label: "開催済"
                                        }
                                    ].map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>setPrefSortMode(btn.mode),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200", prefSortMode === btn.mode ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground"),
                                            children: [
                                                btn.mode !== "north" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                                    className: "h-3 w-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 19
                                                }, this),
                                                btn.label
                                            ]
                                        }, btn.mode, true, {
                                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                            lineNumber: 735,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 727,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                                columns: [
                                    {
                                        key: "prefecture",
                                        label: "都道府県",
                                        align: "left"
                                    },
                                    {
                                        key: "region",
                                        label: "地方",
                                        align: "left"
                                    },
                                    {
                                        key: "listings",
                                        label: "掲載件数",
                                        align: "right"
                                    },
                                    {
                                        key: "upcoming",
                                        label: "未開催",
                                        align: "right"
                                    },
                                    {
                                        key: "completed",
                                        label: "開催済み",
                                        align: "right"
                                    }
                                ],
                                data: sortedPrefectureTable
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                                lineNumber: 754,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 726,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "オンラインイベント掲載件数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "category",
                                    label: "区分",
                                    align: "left"
                                },
                                {
                                    key: "listings",
                                    label: "掲載件数",
                                    align: "right"
                                },
                                {
                                    key: "upcoming",
                                    label: "未開催",
                                    align: "right"
                                },
                                {
                                    key: "completed",
                                    label: "開催済み",
                                    align: "right"
                                }
                            ],
                            data: tables?.onlineTable || []
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                            lineNumber: 766,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                        lineNumber: 765,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
                lineNumber: 725,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/cbed-page.tsx",
        lineNumber: 528,
        columnNumber: 5
    }, this);
}
_s(CBEDPage, "s3XZekKOm3RAmsWr85O/1u0D7no=");
_c = CBEDPage;
var _c;
__turbopack_context__.k.register(_c, "CBEDPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/cbmd-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CBMDPage",
    ()=>CBMDPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/chart-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ranking$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/ranking-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/stacked-bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$japan$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/japan-map.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const getJSTDate = ()=>new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tokyo"
    }));
const REGION_MAP = {
    北海道: "北海道",
    青森: "東北",
    岩手: "東北",
    宮城: "東北",
    秋田: "東北",
    山形: "東北",
    福島: "東北",
    茨城: "関東",
    栃木: "関東",
    群生: "関東",
    群馬: "関東",
    埼玉: "関東",
    千葉: "関東",
    東京: "関東",
    神奈川: "関東",
    新潟: "中部",
    富山: "中部",
    石川: "中部",
    福井: "中部",
    山梨: "中部",
    長野: "中部",
    岐阜: "中部",
    静岡: "中部",
    愛知: "中部",
    三重: "近畿",
    滋賀: "近畿",
    Kyoto: "近畿",
    京都: "近畿",
    大阪: "近畿",
    兵庫: "近畿",
    奈良: "近畿",
    和歌山: "近畿",
    鳥取: "中国",
    島根: "中国",
    岡山: "中国",
    広島: "中国",
    山口: "中国",
    徳島: "四国",
    香川: "四国",
    愛媛: "四国",
    高知: "四国",
    福岡: "九州・沖縄",
    佐賀: "九州・沖縄",
    長崎: "九州・沖縄",
    熊本: "九州・沖縄",
    大分: "九州・沖縄",
    宮崎: "九州・沖縄",
    鹿児島: "九州・沖縄",
    沖縄: "九州・沖縄"
};
function CBMDPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ★ マップとランキングの表示切り替えステートを追加（CBMDは「未開催」などの概念がないため、ひとまず「総件数」のみをデフォルトとします。
    // 必要に応じて「今月追加分」などの切り替えを追加することも可能です）
    const [mapViewMode, setMapViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("total");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CBMDPage.useEffect": ()=>{
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDvzMbN9CNa_PXwmre1IFid8fw7rD2yG0IlBnifsjtrtDN0cy3n-nQlEFvKQbE4w06TXTHoZ4edpzj/pub?gid=0&single=true&output=csv";
            fetch(csvUrl).then({
                "CBMDPage.useEffect": (response)=>response.text()
            }["CBMDPage.useEffect"]).then({
                "CBMDPage.useEffect": (csvText)=>{
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                        skipEmptyLines: true
                    });
                    const rawData = parsed.data;
                    const headerRowIndex = rawData.findIndex({
                        "CBMDPage.useEffect.headerRowIndex": (row)=>row.includes("name") && row.includes("prefecture")
                    }["CBMDPage.useEffect.headerRowIndex"]);
                    if (headerRowIndex === -1) return;
                    const headers = rawData[headerRowIndex];
                    const nameIdx = headers.indexOf("name");
                    const prefIdx = headers.indexOf("prefecture");
                    const updateIdx = headers.indexOf("updatedAt");
                    const validRows = rawData.slice(headerRowIndex + 1).filter({
                        "CBMDPage.useEffect.validRows": (row)=>row[nameIdx] && String(row[nameIdx]).trim() !== ""
                    }["CBMDPage.useEffect.validRows"]);
                    if (validRows.length === 0) return;
                    const nowJst = getJSTDate();
                    const currentY = nowJst.getFullYear();
                    const currentM = nowJst.getMonth() + 1;
                    const currentD = nowJst.getDate();
                    const todayNum = currentY * 10000 + currentM * 100 + currentD;
                    const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
                    const endOfPrevMonthJst = new Date(nowJst.getTime());
                    endOfPrevMonthJst.setDate(0);
                    const endOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + endOfPrevMonthJst.getDate();
                    const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
                    const startOfWeekJst = new Date(nowJst.getTime());
                    startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
                    const startOfWeekNum = startOfWeekJst.getFullYear() * 10000 + (startOfWeekJst.getMonth() + 1) * 100 + startOfWeekJst.getDate();
                    let thisMonthChange = 0, thisWeekChange = 0, todayChange = 0, endOfPrevMonthListings = 0;
                    const regionCounts = new Map();
                    const prefCounts = new Map();
                    validRows.forEach({
                        "CBMDPage.useEffect": (row)=>{
                            const updateStr = String(row[updateIdx] || "").trim();
                            if (updateStr) {
                                const parts = updateStr.split(/[\/\- :]/);
                                if (parts.length >= 3) {
                                    const uNum = parseInt(parts[0], 10) * 10000 + parseInt(parts[1], 10) * 100 + parseInt(parts[2], 10);
                                    if (uNum >= startOfThisMonthNum) thisMonthChange++;
                                    if (uNum <= endOfPrevMonthNum) endOfPrevMonthListings++;
                                    if (uNum >= startOfWeekNum) thisWeekChange++;
                                    if (uNum === todayNum) todayChange++;
                                }
                            }
                            const rawPref = String(row[prefIdx] || "").trim();
                            let cleanPref = rawPref.replace(/(都|府|県)$/, "");
                            if (cleanPref === "北海") cleanPref = "北海道";
                            const region = REGION_MAP[cleanPref] || "その他";
                            const displayPref = rawPref || "未設定";
                            regionCounts.set(region, (regionCounts.get(region) || 0) + 1);
                            prefCounts.set(displayPref, (prefCounts.get(displayPref) || 0) + 1);
                        }
                    }["CBMDPage.useEffect"]);
                    const totalListings = validRows.length;
                    const monthlyChangeRate = endOfPrevMonthListings === 0 ? 100 : Math.round(totalListings / endOfPrevMonthListings * 100);
                    const regionOrder = [
                        "北海道",
                        "東北",
                        "関東",
                        "中部",
                        "近畿",
                        "中国",
                        "四国",
                        "九州・沖縄",
                        "その他"
                    ];
                    const regionChartData = Array.from(regionCounts.entries()).map({
                        "CBMDPage.useEffect.regionChartData": ([name, count])=>({
                                name,
                                掲載件数: count
                            })
                    }["CBMDPage.useEffect.regionChartData"]).sort({
                        "CBMDPage.useEffect.regionChartData": (a, b)=>{
                            const idxA = regionOrder.indexOf(a.name);
                            const idxB = regionOrder.indexOf(b.name);
                            return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
                        }
                    }["CBMDPage.useEffect.regionChartData"]);
                    const regionRanking = Array.from(regionCounts.entries()).filter({
                        "CBMDPage.useEffect.regionRanking": ([name])=>name !== "その他"
                    }["CBMDPage.useEffect.regionRanking"]).sort({
                        "CBMDPage.useEffect.regionRanking": (a, b)=>b[1] - a[1]
                    }["CBMDPage.useEffect.regionRanking"]).map({
                        "CBMDPage.useEffect.regionRanking": ([name, count], i)=>({
                                rank: i + 1,
                                name,
                                count,
                                percentage: Math.round(count / totalListings * 100) || 0
                            })
                    }["CBMDPage.useEffect.regionRanking"]);
                    // ★ 都道府県ランキングを「全件表示」に変更（sliceを外す）
                    const prefectureRanking = Array.from(prefCounts.entries()).filter({
                        "CBMDPage.useEffect.prefectureRanking": ([name])=>name !== "未設定"
                    }["CBMDPage.useEffect.prefectureRanking"]).sort({
                        "CBMDPage.useEffect.prefectureRanking": (a, b)=>b[1] - a[1]
                    }["CBMDPage.useEffect.prefectureRanking"]).map({
                        "CBMDPage.useEffect.prefectureRanking": ([name, count], i)=>({
                                rank: i + 1,
                                name,
                                count,
                                percentage: Math.round(count / totalListings * 100) || 0
                            })
                    }["CBMDPage.useEffect.prefectureRanking"]);
                    setData({
                        summary: {
                            totalListings,
                            thisMonthChange,
                            monthlyChangeRate,
                            thisWeekChange,
                            todayChange
                        },
                        charts: {
                            regionData: regionChartData
                        },
                        rankings: {
                            regionRanking,
                            prefectureRanking
                        }
                    });
                }
            }["CBMDPage.useEffect"]).catch({
                "CBMDPage.useEffect": (err)=>console.error("CSV Fetch Error:", err)
            }["CBMDPage.useEffect"]);
        }
    }["CBMDPage.useEffect"], []);
    // ★ マップとランキングの表示データ
    const displayRankings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CBMDPage.useMemo[displayRankings]": ()=>{
            if (!data || !data.rankings) return {
                mapData: []
            };
            // CBMDは「未開催」などの区別がないので、そのままランキングデータを流用
            const mapData = data.rankings.prefectureRanking.map({
                "CBMDPage.useMemo[displayRankings].mapData": (p)=>({
                        name: p.name,
                        value: p.count
                    })
            }["CBMDPage.useMemo[displayRankings].mapData"]);
            return {
                mapData
            };
        }
    }["CBMDPage.useMemo[displayRankings]"], [
        data,
        mapViewMode
    ]);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                    lineNumber: 236,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "CBMDデータを集計中..."
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
            lineNumber: 235,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
        lineNumber: 234,
        columnNumber: 7
    }, this);
    const { summary, charts, rankings } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "CBMD分析"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "CBMD掲載情報（ミュージアム・施設）の地域別・都道府県別の分布を確認できます。"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1gdD3uqzvQWZMmn0UK6LZm_TIWS53Ar8tR80E8cz-ybY/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "掲載件数",
                        value: summary.totalListings.toLocaleString(),
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月の追加数",
                        value: `+${summary.thisMonthChange}`,
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "先月末比",
                        value: summary.monthlyChangeRate,
                        unit: "%",
                        trendValue: "先月末比",
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今週の追加数",
                        value: `+${summary.thisWeekChange}`,
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                        accentColor: "accent"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今日の追加数",
                        value: `+${summary.todayChange}`,
                        unit: "件",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "warning"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "地方別掲載件数",
                description: "各地方のCBMD掲載数（北から南へ並び順）",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                    height: "h-[400px]",
                    children: charts?.regionData?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                        data: charts.regionData,
                        bars: [
                            {
                                dataKey: "掲載件数",
                                name: "掲載件数",
                                color: "#38BDF8"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 316,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full items-center justify-center text-muted-foreground",
                        children: "データがありません"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 323,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "地方別掲載件数ランキング",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[400px] overflow-y-auto custom-scrollbar pr-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ranking$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RankingList"], {
                                items: rankings?.regionRanking || []
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "都道府県別掲載件数ランキング",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[400px] overflow-y-auto custom-scrollbar pr-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ranking$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RankingList"], {
                                items: rankings?.prefectureRanking || []
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "ミュージアム分布ヒートマップ",
                        description: "都道府県別のCBMD登録施設数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[400px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$japan$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JapanMap"], {
                                data: displayRankings.mapData,
                                colorMax: "#16f372"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/cbmd-page.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_s(CBMDPage, "WqvCjjcsC5GdwHl2NJrizGrR+M0=");
_c = CBMDPage;
var _c;
__turbopack_context__.k.register(_c, "CBMDPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/cbl-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CBLPage",
    ()=>CBLPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/chart-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/scrollable-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/donut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/stacked-bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ranking$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/ranking-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const getJSTDate = ()=>new Date(new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo'
    }));
const CATEGORY_COLORS = [
    '#38BDF8',
    '#8B5CF6',
    '#22C55E',
    '#F59E0B',
    '#EF4444',
    '#EC4899',
    '#10B981',
    '#6B7280'
];
const TYPE_COLORS = [
    '#8B5CF6',
    '#38BDF8',
    '#F59E0B',
    '#22C55E',
    '#EC4899'
];
const LEVEL_COLORS = {
    '初心者': '#22C55E',
    '中級者': '#38BDF8',
    '上級者': '#F59E0B'
};
function CBLPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CBLPage.useEffect": ()=>{
            const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTiWVQ_iCVoOVIzzsR28wnfaWqniBFolkDs3uOn_kMcquNmiVqg1ZVV_BGjlIfsyCQlRemOXeoL4Mhw/pub?gid=0&single=true&output=csv';
            fetch(csvUrl).then({
                "CBLPage.useEffect": (response)=>response.text()
            }["CBLPage.useEffect"]).then({
                "CBLPage.useEffect": (csvText)=>{
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                        header: true,
                        skipEmptyLines: true
                    });
                    const rows = parsed.data;
                    if (rows.length === 0) return;
                    const validRows = rows.filter({
                        "CBLPage.useEffect.validRows": (row)=>row.title && String(row.title).trim() !== ''
                    }["CBLPage.useEffect.validRows"]);
                    if (validRows.length === 0) return;
                    const nowJst = getJSTDate();
                    const currentY = nowJst.getFullYear();
                    const currentM = nowJst.getMonth() + 1;
                    const currentMonthStr = `${currentY}/${String(currentM).padStart(2, '0')}`;
                    const endOfPrevMonthJst = new Date(nowJst.getTime());
                    endOfPrevMonthJst.setDate(0);
                    const endOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + endOfPrevMonthJst.getDate();
                    let totalViews = 0, recommendCount = 0, currentMonthCount = 0, endOfPrevMonthArticles = 0;
                    const categoryCounts = new Map();
                    const categoryViewsCounts = new Map(); // ★ ビュー数用のMapを追加
                    const typeCounts = new Map();
                    const levelCounts = new Map();
                    const monthlyCounts = new Map();
                    const articlesForRanking = [];
                    validRows.forEach({
                        "CBLPage.useEffect": (row)=>{
                            const views = parseInt(String(row.views || '0').replace(/,/g, ''), 10) || 0;
                            totalViews += views;
                            const isRecStr = String(row.isRecommend || '').trim().toLowerCase();
                            if (isRecStr === 'true' || isRecStr === '1' || isRecStr === 'yes') recommendCount++;
                            articlesForRanking.push({
                                title: String(row.title || '無題'),
                                views: views
                            });
                            const dateStr = String(row.date || '').replace(/\-/g, '/').trim();
                            let monthLabel = '未定';
                            if (dateStr) {
                                const parts = dateStr.split('/');
                                if (parts.length >= 3) {
                                    const dNum = parseInt(parts[0], 10) * 10000 + parseInt(parts[1], 10) * 100 + parseInt(parts[2], 10);
                                    const ym = `${parts[0]}/${String(parseInt(parts[1], 10)).padStart(2, '0')}`;
                                    monthLabel = ym;
                                    if (ym === currentMonthStr) currentMonthCount++;
                                    if (dNum <= endOfPrevMonthNum) endOfPrevMonthArticles++;
                                }
                            }
                            monthlyCounts.set(monthLabel, (monthlyCounts.get(monthLabel) || 0) + 1);
                            const cat = String(row.category || '未分類').trim();
                            const type = String(row.type || '未分類').trim();
                            const level = String(row.level || '未設定').trim();
                            categoryCounts.set(cat, (categoryCounts.get(cat) || 0) + 1);
                            categoryViewsCounts.set(cat, (categoryViewsCounts.get(cat) || 0) + views); // ★ ビュー数を加算
                            typeCounts.set(type, (typeCounts.get(type) || 0) + 1);
                            levelCounts.set(level, (levelCounts.get(level) || 0) + 1);
                        }
                    }["CBLPage.useEffect"]);
                    const monthlyRate = endOfPrevMonthArticles === 0 ? 100 : Math.round(validRows.length / endOfPrevMonthArticles * 100);
                    const categoryDistribution = Array.from(categoryCounts.entries()).sort({
                        "CBLPage.useEffect.categoryDistribution": (a, b)=>b[1] - a[1]
                    }["CBLPage.useEffect.categoryDistribution"]).map({
                        "CBLPage.useEffect.categoryDistribution": ([name, value], i)=>({
                                name,
                                value,
                                color: CATEGORY_COLORS[i % CATEGORY_COLORS.length]
                            })
                    }["CBLPage.useEffect.categoryDistribution"]);
                    const categoryViewsDistribution = Array.from(categoryViewsCounts.entries()).sort({
                        "CBLPage.useEffect.categoryViewsDistribution": (a, b)=>b[1] - a[1]
                    }["CBLPage.useEffect.categoryViewsDistribution"]).map({
                        "CBLPage.useEffect.categoryViewsDistribution": ([name, value], i)=>({
                                name,
                                value,
                                color: CATEGORY_COLORS[i % CATEGORY_COLORS.length]
                            })
                    }["CBLPage.useEffect.categoryViewsDistribution"]); // ★ ビュー数のデータ作成
                    const typeDistribution = Array.from(typeCounts.entries()).sort({
                        "CBLPage.useEffect.typeDistribution": (a, b)=>b[1] - a[1]
                    }["CBLPage.useEffect.typeDistribution"]).map({
                        "CBLPage.useEffect.typeDistribution": ([name, value], i)=>({
                                name,
                                value,
                                color: TYPE_COLORS[i % TYPE_COLORS.length]
                            })
                    }["CBLPage.useEffect.typeDistribution"]);
                    const levelDistribution = Array.from(levelCounts.entries()).sort({
                        "CBLPage.useEffect.levelDistribution": (a, b)=>b[1] - a[1]
                    }["CBLPage.useEffect.levelDistribution"]).map({
                        "CBLPage.useEffect.levelDistribution": ([name, value])=>({
                                name,
                                value,
                                color: LEVEL_COLORS[name] || '#6B7280'
                            })
                    }["CBLPage.useEffect.levelDistribution"]);
                    const sortedMonths = Array.from(monthlyCounts.keys()).filter({
                        "CBLPage.useEffect.sortedMonths": (k)=>k !== '未定'
                    }["CBLPage.useEffect.sortedMonths"]).sort();
                    const monthlyTrend = sortedMonths.slice(-6).map({
                        "CBLPage.useEffect.monthlyTrend": (m)=>({
                                name: m,
                                新規記事数: monthlyCounts.get(m) || 0
                            })
                    }["CBLPage.useEffect.monthlyTrend"]);
                    const topViewedArticles = articlesForRanking.sort({
                        "CBLPage.useEffect.topViewedArticles": (a, b)=>b.views - a.views
                    }["CBLPage.useEffect.topViewedArticles"]).slice(0, 10).map({
                        "CBLPage.useEffect.topViewedArticles": (a, i)=>({
                                rank: i + 1,
                                name: a.title,
                                count: a.views,
                                percentage: 0
                            })
                    }["CBLPage.useEffect.topViewedArticles"]);
                    const categoryTable = Array.from(categoryCounts.entries()).sort({
                        "CBLPage.useEffect.categoryTable": (a, b)=>b[1] - a[1]
                    }["CBLPage.useEffect.categoryTable"]).map({
                        "CBLPage.useEffect.categoryTable": ([category, count])=>({
                                category,
                                count,
                                percentage: `${Math.round(count / validRows.length * 100)}%`
                            })
                    }["CBLPage.useEffect.categoryTable"]);
                    setData({
                        summary: {
                            totalArticles: validRows.length,
                            totalViews: totalViews,
                            recommendCount: recommendCount,
                            monthlyIncrease: currentMonthCount,
                            monthlyRate
                        },
                        charts: {
                            categoryDistribution,
                            categoryViewsDistribution,
                            typeDistribution,
                            levelDistribution,
                            monthlyTrend
                        },
                        rankings: {
                            topViewedArticles
                        },
                        tables: {
                            categoryTable
                        }
                    });
                }
            }["CBLPage.useEffect"]).catch({
                "CBLPage.useEffect": (err)=>console.error('CSV Fetch Error:', err)
            }["CBLPage.useEffect"]);
        }
    }["CBLPage.useEffect"], []);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                    lineNumber: 111,
                    columnNumber: 159
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "CBLデータを集計中..."
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                    lineNumber: 111,
                    columnNumber: 191
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
            lineNumber: 111,
            columnNumber: 104
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
        lineNumber: 111,
        columnNumber: 22
    }, this);
    const { summary = {}, charts = {}, rankings = {}, tables = {} } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "CBL (Library) 分析"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                lineNumber: 118,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "Cosmo Base Libraryの記事数、ビュー数、カテゴリ分布等を確認できます。"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                lineNumber: 118,
                                columnNumber: 103
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1QtgJJiX1dBq_jXtbEgD88v9ZgSCcZSr2cObcnglKsNQ/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "総記事数",
                        value: summary.totalArticles?.toLocaleString() || 0,
                        unit: "記事",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "総ビュー数",
                        value: summary.totalViews?.toLocaleString() || 0,
                        unit: "views",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "おすすめ記事数",
                        value: summary.recommendCount?.toLocaleString() || 0,
                        unit: "記事",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                        accentColor: "warning"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月の新規記事",
                        value: `+${summary.monthlyIncrease || 0}`,
                        unit: "記事",
                        trendValue: `先月末比 ${summary.monthlyRate}%`,
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "accent"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "カテゴリ別 記事数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.categoryDistribution || [],
                                centerLabel: "記事"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                lineNumber: 143,
                                columnNumber: 75
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                            lineNumber: 143,
                            columnNumber: 40
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "カテゴリ別 ビュー数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.categoryViewsDistribution || [],
                                centerLabel: "Views"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                lineNumber: 144,
                                columnNumber: 76
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                            lineNumber: 144,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "タイプ別 割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.typeDistribution || [],
                                centerLabel: "記事"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                lineNumber: 145,
                                columnNumber: 73
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                            lineNumber: 145,
                            columnNumber: 38
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "レベル別 割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.levelDistribution || [],
                                centerLabel: "記事"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                lineNumber: 146,
                                columnNumber: 73
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                            lineNumber: 146,
                            columnNumber: 38
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月別 記事投稿数推移 (直近6ヶ月)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[320px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                data: charts.monthlyTrend || [],
                                bars: [
                                    {
                                        dataKey: '新規記事数',
                                        name: '新規記事数',
                                        color: '#38BDF8'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                lineNumber: 150,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                            lineNumber: 150,
                            columnNumber: 49
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "総ビュー数 トップ10ランキング",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[320px] overflow-y-auto pr-2 custom-scrollbar",
                            children: rankings.topViewedArticles && rankings.topViewedArticles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ranking$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RankingList"], {
                                items: rankings.topViewedArticles.map((item)=>({
                                        ...item,
                                        count: `${item.count.toLocaleString()} views`
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                lineNumber: 153,
                                columnNumber: 85
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "ビュー数データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                                lineNumber: 153,
                                columnNumber: 221
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "カテゴリ別 記事集計",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                    columns: [
                        {
                            key: 'category',
                            label: 'カテゴリ名',
                            align: 'left'
                        },
                        {
                            key: 'count',
                            label: '記事数',
                            align: 'right'
                        },
                        {
                            key: 'percentage',
                            label: '全体割合',
                            align: 'right'
                        }
                    ],
                    data: tables.categoryTable || []
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                    lineNumber: 158,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/cbl-page.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(CBLPage, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c = CBLPage;
var _c;
__turbopack_context__.k.register(_c, "CBLPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/type-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpaceDiagnosisPage",
    ()=>SpaceDiagnosisPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/chart-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/scrollable-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/donut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/line-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/stacked-bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const getJSTDate = ()=>new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tokyo"
    }));
const formatDiff = (num)=>{
    if (num > 0) return `+${num.toLocaleString()}`;
    if (num < 0) return num.toLocaleString();
    return "0";
};
const SIMPLE_TYPE_COLORS = {
    RI: "#cbace4",
    DI: "#85c68b",
    RO: "#EEEEBB",
    DO: "#83CBEB"
};
const SIMPLE_TYPE_LABELS = {
    RI: "天文台トラベラー (RI)",
    DI: "人工衛星 (DI)",
    RO: "ロケット打ち上げ (RO)",
    DO: "宇宙ステーション (DO)"
};
const DETAILED_TYPE_COLORS = {
    RVXI: "#D1B3E8",
    RVXS: "#BCA2DC",
    RVMI: "#E4C3F0",
    RVMS: "#C5B9D6",
    RAXI: "#F2F2C4",
    RAXS: "#F5E69C",
    RAMI: "#E8E8B6",
    RAMS: "#FCE877",
    PVXI: "#96CE9C",
    PVXS: "#72B879",
    PVMI: "#A8DCAE",
    PVMS: "#8BCA83",
    PAXI: "#76C5E8",
    PAXS: "#9AD4EE",
    PAMI: "#6CB6D9",
    PAMS: "#5AADD6"
};
const DETAILED_TYPE_LABELS = {
    RVXI: "🌌宇宙ロマン志向夢想家 (RVXI)",
    RVXS: "🌕未来観察志向観測者 (RVXS)",
    RVMI: "🪐天体愛好志向探訪者 (RVMI)",
    RVMS: "🌠探査共感志向見守り手 (RVMS)",
    RAXI: "🛸宇宙探求志向探求者 (RAXI)",
    RAXS: "🎙️宇宙伝道志向語り部 (RAXS)",
    RAMI: "📸趣味没頭志向職人 (RAMI)",
    RAMS: "🎉宇宙カルチャー志向仕掛け人 (RAMS)",
    PVXI: "📖宇宙教養志向学び手 (PVXI)",
    PVXS: "🧩産業分析志向分析者 (PVXS)",
    PVMI: "📡最新テック志向追跡者 (PVMI)",
    PVMS: "🤝社会応用志向つなぎ手 (PVMS)",
    PAXI: "🧭宇宙キャリア志向開拓者 (PAXI)",
    PAXS: "🏁産業推進志向推進者 (PAXS)",
    PAMI: "🔧技術開発志向創り手 (PAMI)",
    PAMS: "🌐社会課題解決志向実装者 (PAMS)"
};
const SIMPLE_QUESTIONS_MAP = [
    {
        key: "R",
        text: "ブラックホールや地球外生命体など、未知の宇宙の話にワクワクする"
    },
    {
        key: "D",
        text: "宇宙の技術が、生活やビジネスにどう役立つか気になる"
    },
    {
        key: "I",
        text: "宇宙について、記事やニュースをじっくり読むのが好き"
    },
    {
        key: "O",
        text: "誰かと話したり、イベントで盛り上がるのが好き"
    },
    {
        key: "P",
        text: "これから宇宙に関わる活動に少しでも触れてみたい"
    }
];
const DETAILED_2CHOICE_MAP = [
    {
        key: "Q1",
        text: "宇宙のニュースでつい見てしまうのは？",
        opt1: "未知の銀河やブラックホール",
        val1: "1",
        opt2: "宇宙ビジネスやロケット開発",
        val2: "-1"
    },
    {
        key: "Q2",
        text: "宇宙の魅力はどっちに近い？",
        opt1: "神秘やロマン",
        val1: "1",
        opt2: "可能性や実用性",
        val2: "-1"
    },
    {
        key: "Q3",
        text: "もし宇宙関連で自由に1万円使えるなら？",
        opt1: "星空ツアーや高画質な写真集",
        val1: "1",
        opt2: "専門書や最新技術サロン",
        val2: "-1"
    },
    {
        key: "Q4",
        text: "宇宙について話すなら？",
        opt1: "「宇宙人いると思う？」",
        val1: "1",
        opt2: "「この技術、地上で使えるね」",
        val2: "-1"
    },
    {
        key: "Q7",
        text: "面白い宇宙コンテンツを見たら？",
        opt1: "満足して終わる",
        val1: "1",
        opt2: "誰かに話す・発信する",
        val2: "-1"
    },
    {
        key: "Q8",
        text: "最近の宇宙との関わりは？",
        opt1: "見る・読む",
        val1: "1",
        opt2: "話す・投稿・参加",
        val2: "-1"
    },
    {
        key: "Q9",
        text: "コミュニティに入ったら？",
        opt1: "まずは様子を見る",
        val1: "1",
        opt2: "とりあえず発言してみる",
        val2: "-1"
    },
    {
        key: "Q10",
        text: "本音として近いのは？",
        opt1: "発信や制作はハードル高い",
        val1: "1",
        opt2: "見てるだけだと物足りない",
        val2: "-1"
    },
    {
        key: "Q13",
        text: "ロケットで気になるのは？",
        opt1: "構造や仕組み",
        val1: "1",
        opt2: "社会への影響",
        val2: "-1"
    },
    {
        key: "Q14",
        text: "新しい宇宙プロジェクトが発表されたら？",
        opt1: "どんな技術で動くの？",
        val1: "1",
        opt2: "人類の未来をどう変えるの？",
        val2: "-1"
    },
    {
        key: "Q15",
        text: "展示で見入るのは？",
        opt1: "部品や構造",
        val1: "1",
        opt2: "歴史や未来",
        val2: "-1"
    },
    {
        key: "Q16",
        text: "モヤっとするのは？",
        opt1: "仕組みが分からない説明",
        val1: "1",
        opt2: "全体像が見えない話",
        val2: "-1"
    },
    {
        key: "Q19",
        text: "宇宙との関わり方は？",
        opt1: "趣味として楽しみたい",
        val1: "1",
        opt2: "仕事や活動にしたい",
        val2: "-1"
    },
    {
        key: "Q20",
        text: "宇宙に時間を使うなら？",
        opt1: "楽しいこと優先",
        val1: "1",
        opt2: "役に立つこと優先",
        val2: "-1"
    },
    {
        key: "Q21",
        text: "理想の関わり方は？",
        opt1: "自分のペース",
        val1: "1",
        opt2: "社会に影響",
        val2: "-1"
    },
    {
        key: "Q22",
        text: "冷める瞬間は？",
        opt1: "義務や成果を求められる時",
        val1: "1",
        opt2: "何も生まれない時",
        val2: "-1"
    }
];
const DETAILED_5SCALE_MAP = [
    {
        key: "Q5",
        text: "宇宙の美しさやスケールに、理由なく心を動かされることがある",
        invert: false
    },
    {
        key: "Q6",
        text: "宇宙は“ビジネスや社会を変える手段”として興味がある",
        invert: true
    },
    {
        key: "Q11",
        text: "面白いものを見るだけで満足できるタイプだ",
        invert: false
    },
    {
        key: "Q12",
        text: "自分の考えや好きなことを、何かしらの形で外に出したいと思う",
        invert: true
    },
    {
        key: "Q17",
        text: "細かい仕組みや構造を理解すると満足感がある",
        invert: false
    },
    {
        key: "Q18",
        text: "大きな流れや未来の方向性を理解するとワクワクする",
        invert: true
    },
    {
        key: "Q23",
        text: "自分が楽しいと思えることを最優先したい",
        invert: false
    },
    {
        key: "Q24",
        text: "自分の行動が誰かや社会に影響することにやりがいを感じる",
        invert: true
    }
];
const AxisBar = ({ labelLeft, labelRight, countLeft, countRight, colorLeft, colorRight })=>{
    const safeCountLeft = countLeft || 0;
    const safeCountRight = countRight || 0;
    const total = safeCountLeft + safeCountRight || 1;
    const leftPct = safeCountLeft / total * 100;
    const rightPct = safeCountRight / total * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm font-semibold text-foreground mb-1.5 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            labelLeft,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground font-normal ml-1",
                                children: [
                                    "(",
                                    safeCountLeft,
                                    "人)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground font-normal mr-1",
                                children: [
                                    "(",
                                    safeCountRight,
                                    "人)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            labelRight
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-full flex rounded-full overflow-hidden bg-secondary/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${leftPct}%`,
                            backgroundColor: colorLeft
                        },
                        className: "transition-all duration-500"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${rightPct}%`,
                            backgroundColor: colorRight
                        },
                        className: "transition-all duration-500"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/type-page.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AxisBar;
const MultiSegmentBar = ({ title, segments })=>{
    const total = segments.reduce((sum, s)=>sum + s.count, 0) || 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 pt-4 border-t border-border/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm font-semibold text-foreground mb-2 px-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        title,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground font-normal ml-1",
                            children: [
                                "(",
                                total,
                                "人)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-full flex rounded-full overflow-hidden bg-secondary/30 mb-2",
                children: segments.map((s, i)=>{
                    const pct = s.count / total * 100;
                    return pct > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${pct}%`,
                            backgroundColor: s.color
                        },
                        className: "transition-all duration-500",
                        title: `${s.label}: ${s.count}人`
                    }, i, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 322,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : null;
                })
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground px-1",
                children: segments.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full",
                                style: {
                                    backgroundColor: s.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            s.label,
                            " (",
                            s.count,
                            "人)"
                        ]
                    }, i, true, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/type-page.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = MultiSegmentBar;
const DistributionBar = ({ item })=>{
    if (item.type === "scale") {
        const scaleColors = [
            "#38BDF8",
            "#7DD3FC",
            "#E2E8F0",
            "#94A3B8",
            "#64748B"
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full min-w-[280px] py-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-[11px] font-bold text-foreground mb-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.leftLabel
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.rightLabel
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full h-3 rounded-full overflow-hidden bg-secondary/30 mb-1",
                    children: item.options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: `${opt.percentage}%`,
                                backgroundColor: scaleColors[i]
                            },
                            className: "border-r border-background/20 last:border-none",
                            title: `${opt.percentage}% (${opt.count}人)`
                        }, i, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full justify-between text-[11px] text-muted-foreground px-0.5",
                    children: item.options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1 font-medium justify-center whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                    style: {
                                        backgroundColor: scaleColors[i]
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "[",
                                        opt.label,
                                        "] ",
                                        opt.percentage,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/type-page.tsx",
            lineNumber: 350,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full min-w-[280px] py-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-[11px] font-bold mb-1.5 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1/2 truncate text-left text-[#38BDF8]",
                            children: item.options[0].label
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1/2 truncate text-right text-[#8B5CF6]",
                            children: item.options[1].label
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full h-3 rounded-full overflow-hidden bg-secondary/30 mb-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: `${item.options[0].percentage}%`,
                                backgroundColor: "#38BDF8"
                            },
                            title: `${item.options[0].label}: ${item.options[0].percentage}% (${item.options[0].count}人)`
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: `${item.options[1].percentage}%`,
                                backgroundColor: "#8B5CF6"
                            },
                            title: `${item.options[1].label}: ${item.options[1].percentage}% (${item.options[1].count}人)`
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-[11px] font-medium text-muted-foreground px-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#38BDF8]",
                            children: [
                                item.options[0].percentage,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#8B5CF6]",
                            children: [
                                item.options[1].percentage,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/type-page.tsx",
            lineNumber: 388,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
};
_c2 = DistributionBar;
function SpaceDiagnosisPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpaceDiagnosisPage.useEffect": ()=>{
            const urlSimpleCbhp = "https://docs.google.com/spreadsheets/d/e/2PACX-1vReKqSJGubls2ixij5n6FbAi37wzshzZ09Q10a0uzJO1kuk8dSuw9c_yjm4XmsJelkiCLBubKAUFgky/pub?gid=0&single=true&output=csv";
            const urlSimpleParticipant = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzLEbfZRlDsErUJ7hrEqtaXTpEym3kWXGyvpQDrAbLOFbJZ4_aoMdFn-BQM1GSeHiXsTo4L3kY86YC/pub?gid=0&single=true&output=csv";
            const urlDetailed = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJvQVHHyL56_1xeVimkfbJCXCNN9MGtDt_ACebndkqhuqGbugvykZvRhkmajQ5fs6ug_Tas_rPXZUl/pub?gid=0&single=true&output=csv";
            Promise.all([
                fetch(urlSimpleCbhp).then({
                    "SpaceDiagnosisPage.useEffect": (res)=>res.text()
                }["SpaceDiagnosisPage.useEffect"]),
                fetch(urlSimpleParticipant).then({
                    "SpaceDiagnosisPage.useEffect": (res)=>res.text()
                }["SpaceDiagnosisPage.useEffect"]),
                fetch(urlDetailed).then({
                    "SpaceDiagnosisPage.useEffect": (res)=>res.text()
                }["SpaceDiagnosisPage.useEffect"])
            ]).then({
                "SpaceDiagnosisPage.useEffect": ([csv1, csv2, csv3])=>{
                    const parseCSV = {
                        "SpaceDiagnosisPage.useEffect.parseCSV": (csv, source, version)=>{
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csv, {
                                header: true,
                                skipEmptyLines: true
                            }).data.map({
                                "SpaceDiagnosisPage.useEffect.parseCSV": (row)=>({
                                        ...row,
                                        _source: source,
                                        _version: version
                                    })
                            }["SpaceDiagnosisPage.useEffect.parseCSV"]);
                        }
                    }["SpaceDiagnosisPage.useEffect.parseCSV"];
                    const allRows = [
                        ...parseCSV(csv1, "CBHP", "simple"),
                        ...parseCSV(csv2, "参加者ページ", "simple"),
                        ...parseCSV(csv3, "詳細版", "detailed")
                    ].map({
                        "SpaceDiagnosisPage.useEffect.allRows": (row)=>{
                            const dStr = String(row.date || "").trim();
                            const parts = dStr.split(/[\/\- :]/);
                            if (parts.length >= 3) {
                                const y = parseInt(parts[0], 10);
                                const m = parseInt(parts[1], 10);
                                const d = parseInt(parts[2], 10);
                                const num = y * 10000 + m * 100 + d;
                                const dateKey = `${y}/${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}`;
                                return {
                                    ...row,
                                    num,
                                    dateKey,
                                    y,
                                    m,
                                    d
                                };
                            }
                            return {
                                ...row,
                                num: NaN
                            };
                        }
                    }["SpaceDiagnosisPage.useEffect.allRows"]).filter({
                        "SpaceDiagnosisPage.useEffect.allRows": (row)=>!isNaN(row.num)
                    }["SpaceDiagnosisPage.useEffect.allRows"]).sort({
                        "SpaceDiagnosisPage.useEffect.allRows": (a, b)=>a.num - b.num
                    }["SpaceDiagnosisPage.useEffect.allRows"]);
                    if (allRows.length === 0) return;
                    const nowJst = getJSTDate();
                    const currentY = nowJst.getFullYear();
                    const currentM = nowJst.getMonth() + 1;
                    const currentD = nowJst.getDate();
                    const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
                    const todayNum = currentY * 10000 + currentM * 100 + currentD;
                    const startOfWeekJst = new Date(nowJst.getTime());
                    const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
                    startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
                    const startOfWeekNum = startOfWeekJst.getFullYear() * 10000 + (startOfWeekJst.getMonth() + 1) * 100 + startOfWeekJst.getDate();
                    const endOfPrevMonthJst = new Date(nowJst.getTime());
                    endOfPrevMonthJst.setDate(0);
                    const endOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + endOfPrevMonthJst.getDate();
                    const axisCounts = {
                        R: 0,
                        P: 0,
                        V: 0,
                        A: 0,
                        M: 0,
                        X: 0,
                        I: 0,
                        S: 0
                    };
                    const simpleAxisCounts = {
                        R: 0,
                        D: 0,
                        I: 0,
                        O: 0,
                        P: {
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0
                        }
                    };
                    const simpleTypeMap = new Map();
                    const detailedTypeMap = new Map();
                    const dailyMap = new Map();
                    // 簡易版と完全版で月別推移を分離
                    const monthlySimpleTypeMap = new Map();
                    const monthlyDetailedTypeMap = new Map();
                    let thisMonthTotal = 0, thisMonthSimpleTotal = 0, thisMonthSimpleCbhp = 0, thisMonthSimplePart = 0, thisMonthDetailed = 0;
                    let thisWeekTotal = 0, thisWeekSimpleTotal = 0, thisWeekSimpleCbhp = 0, thisWeekSimplePart = 0, thisWeekDetailed = 0;
                    let todayTotal = 0, todaySimpleTotal = 0, todaySimpleCbhp = 0, todaySimplePart = 0, todayDetailed = 0;
                    let endOfPrevMonthTotal = 0, endOfPrevMonthSimple = 0, endOfPrevMonthDetailed = 0;
                    allRows.forEach({
                        "SpaceDiagnosisPage.useEffect": (row)=>{
                            const type = String(row.type || "").trim();
                            const dateKey = row.dateKey;
                            if (!dailyMap.has(dateKey)) dailyMap.set(dateKey, {
                                incTotal: 0,
                                incSimpleTotal: 0,
                                incSimpleCbhp: 0,
                                incSimplePart: 0,
                                incDetailed: 0,
                                dateKey,
                                num: row.num,
                                y: row.y,
                                m: row.m,
                                d: row.d
                            });
                            const daily = dailyMap.get(dateKey);
                            daily.incTotal++;
                            let basicType = "その他";
                            if (row._version === "simple") {
                                daily.incSimpleTotal++;
                                if (row._source === "CBHP") daily.incSimpleCbhp++;
                                if (row._source === "参加者ページ") daily.incSimplePart++;
                                if (type && SIMPLE_TYPE_COLORS[type]) {
                                    simpleTypeMap.set(type, (simpleTypeMap.get(type) || 0) + 1);
                                    if (type.includes("R")) simpleAxisCounts.R++;
                                    if (type.includes("D")) simpleAxisCounts.D++;
                                    if (type.includes("I")) simpleAxisCounts.I++;
                                    if (type.includes("O")) simpleAxisCounts.O++;
                                }
                                const pVal = parseInt(row.P);
                                if (pVal >= 1 && pVal <= 5) simpleAxisCounts.P[pVal]++;
                                basicType = type; // RI, DI, RO, DO
                            } else {
                                daily.incDetailed++;
                                if (type && DETAILED_TYPE_COLORS[type]) detailedTypeMap.set(type, (detailedTypeMap.get(type) || 0) + 1);
                                const rp = parseInt(row.RP) || 0;
                                const va = parseInt(row.VA) || 0;
                                const mx = parseInt(row.MX) || 0;
                                const is = parseInt(row.IS) || 0;
                                if (rp > 0) axisCounts.R++;
                                else axisCounts.P++;
                                if (va > 0) axisCounts.V++;
                                else axisCounts.A++;
                                if (mx > 0) axisCounts.M++;
                                else axisCounts.X++;
                                if (is > 0) axisCounts.I++;
                                else axisCounts.S++;
                                const r = type.charAt(0);
                                const i = type.charAt(3);
                                if (r === "R" && i === "I") basicType = "RI";
                                else if (r === "P" && i === "I") basicType = "DI";
                                else if (r === "R" && i === "S") basicType = "RO";
                                else if (r === "P" && i === "S") basicType = "DO";
                            }
                            const mLabel = `${row.y}/${String(row.m).padStart(2, "0")}`;
                            if (!monthlySimpleTypeMap.has(mLabel)) {
                                monthlySimpleTypeMap.set(mLabel, {
                                    name: mLabel,
                                    RI: 0,
                                    DI: 0,
                                    RO: 0,
                                    DO: 0
                                });
                            }
                            if (!monthlyDetailedTypeMap.has(mLabel)) {
                                const initObj = {
                                    name: mLabel
                                };
                                Object.keys(DETAILED_TYPE_COLORS).forEach({
                                    "SpaceDiagnosisPage.useEffect": (k)=>initObj[k] = 0
                                }["SpaceDiagnosisPage.useEffect"]);
                                monthlyDetailedTypeMap.set(mLabel, initObj);
                            }
                            if (row._version === "simple") {
                                if ([
                                    "RI",
                                    "DI",
                                    "RO",
                                    "DO"
                                ].includes(basicType)) {
                                    monthlySimpleTypeMap.get(mLabel)[basicType]++;
                                }
                            } else {
                                if (type && DETAILED_TYPE_COLORS[type]) {
                                    monthlyDetailedTypeMap.get(mLabel)[type]++;
                                }
                            }
                            // ★ 変数への加算処理を復活（forEachの中で処理させる）
                            const num = row.num;
                            if (num >= startOfThisMonthNum && num <= todayNum) {
                                thisMonthTotal++;
                                if (row._version === "simple") {
                                    thisMonthSimpleTotal++;
                                    if (row._source === "CBHP") thisMonthSimpleCbhp++;
                                    if (row._source === "参加者ページ") thisMonthSimplePart++;
                                } else {
                                    thisMonthDetailed++;
                                }
                            }
                            if (num >= startOfWeekNum && num <= todayNum) {
                                thisWeekTotal++;
                                if (row._version === "simple") {
                                    thisWeekSimpleTotal++;
                                    if (row._source === "CBHP") thisWeekSimpleCbhp++;
                                    if (row._source === "参加者ページ") thisWeekSimplePart++;
                                } else {
                                    thisWeekDetailed++;
                                }
                            }
                            if (num === todayNum) {
                                todayTotal++;
                                if (row._version === "simple") {
                                    todaySimpleTotal++;
                                    if (row._source === "CBHP") todaySimpleCbhp++;
                                    if (row._source === "参加者ページ") todaySimplePart++;
                                } else {
                                    todayDetailed++;
                                }
                            }
                        }
                    }["SpaceDiagnosisPage.useEffect"]);
                    // --- 設問ごとの回答割合の集計（バー表示＆順番固定） ---
                    const questionsData = [];
                    const processQuestionGroup = {
                        "SpaceDiagnosisPage.useEffect.processQuestionGroup": (groupLabel, questionsList, isScale, versionFilter)=>{
                            questionsList.forEach({
                                "SpaceDiagnosisPage.useEffect.processQuestionGroup": (q)=>{
                                    const counts = new Map();
                                    let validCount = 0;
                                    allRows.forEach({
                                        "SpaceDiagnosisPage.useEffect.processQuestionGroup": (row)=>{
                                            if (row._version !== versionFilter) return;
                                            const val = String(row[q.key] || "").trim();
                                            if (val) {
                                                counts.set(val, (counts.get(val) || 0) + 1);
                                                validCount++;
                                            }
                                        }
                                    }["SpaceDiagnosisPage.useEffect.processQuestionGroup"]);
                                    if (validCount > 0) {
                                        const options = [];
                                        if (isScale) {
                                            let scales = [];
                                            if (versionFilter === "simple") {
                                                scales = [
                                                    "5",
                                                    "4",
                                                    "3",
                                                    "2",
                                                    "1"
                                                ];
                                            } else {
                                                // invert設定に応じた順番（左が常に「とてもそう思う」になるように並べる）
                                                scales = q.invert ? [
                                                    "-2",
                                                    "-1",
                                                    "0",
                                                    "1",
                                                    "2"
                                                ] : [
                                                    "2",
                                                    "1",
                                                    "0",
                                                    "-1",
                                                    "-2"
                                                ];
                                            }
                                            scales.forEach({
                                                "SpaceDiagnosisPage.useEffect.processQuestionGroup": (s)=>{
                                                    const c = counts.get(s) || 0;
                                                    options.push({
                                                        label: s,
                                                        count: c,
                                                        percentage: Math.round(c / validCount * 100) || 0
                                                    });
                                                }
                                            }["SpaceDiagnosisPage.useEffect.processQuestionGroup"]);
                                            let sortOrder = q.key.startsWith("Q") ? 100 + parseInt(q.key.replace("Q", ""), 10) : [
                                                "R",
                                                "D",
                                                "I",
                                                "O",
                                                "P"
                                            ].indexOf(q.key) + 1;
                                            questionsData.push({
                                                key: q.key,
                                                sortOrder,
                                                category: groupLabel,
                                                question: q.text,
                                                count: validCount,
                                                type: "scale",
                                                leftLabel: "とてもそう思う",
                                                rightLabel: "全くそう思わない",
                                                options
                                            });
                                        } else {
                                            const c1 = counts.get(q.val1) || 0;
                                            const c2 = counts.get(q.val2) || 0;
                                            options.push({
                                                label: q.opt1,
                                                count: c1,
                                                percentage: Math.round(c1 / validCount * 100) || 0
                                            });
                                            options.push({
                                                label: q.opt2,
                                                count: c2,
                                                percentage: Math.round(c2 / validCount * 100) || 0
                                            });
                                            questionsData.push({
                                                key: q.key,
                                                sortOrder: 100 + parseInt(q.key.replace("Q", ""), 10),
                                                category: groupLabel,
                                                question: q.text,
                                                count: validCount,
                                                type: "choice",
                                                options
                                            });
                                        }
                                    }
                                }
                            }["SpaceDiagnosisPage.useEffect.processQuestionGroup"]);
                        }
                    }["SpaceDiagnosisPage.useEffect.processQuestionGroup"];
                    processQuestionGroup("簡易版 (5段階)", SIMPLE_QUESTIONS_MAP, true, "simple");
                    processQuestionGroup("完全版 (2択)", DETAILED_2CHOICE_MAP, false, "detailed");
                    processQuestionGroup("完全版 (5段階)", DETAILED_5SCALE_MAP, true, "detailed");
                    // 指定された順序で並び替え
                    questionsData.sort({
                        "SpaceDiagnosisPage.useEffect": (a, b)=>a.sortOrder - b.sortOrder
                    }["SpaceDiagnosisPage.useEffect"]);
                    // 連続日付の補完、月曜日始まりへの修正、および各種集計
                    const sortedMapRecords = Array.from(dailyMap.values()).sort({
                        "SpaceDiagnosisPage.useEffect.sortedMapRecords": (a, b)=>a.num - b.num
                    }["SpaceDiagnosisPage.useEffect.sortedMapRecords"]);
                    const dailyRecords = [];
                    const monthlyAgg = new Map();
                    const weeklyAgg = new Map();
                    if (sortedMapRecords.length > 0) {
                        const first = sortedMapRecords[0];
                        const last = sortedMapRecords[sortedMapRecords.length - 1];
                        let currentDateObj = new Date(first.y, first.m - 1, first.d);
                        const endDateObj = new Date(last.y, last.m - 1, last.d);
                        let cumTotal = 0, cumSimple = 0, cumSimpleCbhp = 0, cumSimplePart = 0, cumDetailed = 0;
                        while(currentDateObj.getTime() <= endDateObj.getTime()){
                            const y = currentDateObj.getFullYear();
                            const m = currentDateObj.getMonth() + 1;
                            const d = currentDateObj.getDate();
                            const dateKey = `${y}/${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}`;
                            const num = y * 10000 + m * 100 + d;
                            const dayData = dailyMap.get(dateKey) || {
                                incTotal: 0,
                                incSimpleTotal: 0,
                                incSimpleCbhp: 0,
                                incSimplePart: 0,
                                incDetailed: 0
                            };
                            cumTotal += dayData.incTotal;
                            cumSimple += dayData.incSimpleTotal;
                            cumSimpleCbhp += dayData.incSimpleCbhp;
                            cumSimplePart += dayData.incSimplePart;
                            cumDetailed += dayData.incDetailed;
                            dailyRecords.push({
                                num,
                                dateKey,
                                y,
                                m,
                                d,
                                ...dayData,
                                total: cumTotal,
                                simpleTotal: cumSimple,
                                simpleCbhp: cumSimpleCbhp,
                                simplePart: cumSimplePart,
                                detailedTotal: cumDetailed
                            });
                            // 月単位集計
                            const mLabel = m + "月";
                            if (!monthlyAgg.has(mLabel)) {
                                monthlyAgg.set(mLabel, {
                                    incTotal: 0,
                                    incSimple: 0,
                                    incSimpleCbhp: 0,
                                    incSimplePart: 0,
                                    incDetailed: 0,
                                    cum: 0
                                });
                            }
                            const mAgg = monthlyAgg.get(mLabel);
                            mAgg.incTotal += dayData.incTotal;
                            mAgg.incSimple += dayData.incSimpleTotal;
                            mAgg.incSimpleCbhp += dayData.incSimpleCbhp;
                            mAgg.incSimplePart += dayData.incSimplePart;
                            mAgg.incDetailed += dayData.incDetailed;
                            mAgg.cum = cumTotal;
                            // 週単位集計 (確実に月曜日始まりにする計算)
                            const dw = currentDateObj.getDay() === 0 ? 7 : currentDateObj.getDay();
                            const startOfWeek = new Date(currentDateObj.getTime());
                            startOfWeek.setDate(currentDateObj.getDate() - (dw - 1));
                            const endOfWeek = new Date(startOfWeek.getTime());
                            endOfWeek.setDate(startOfWeek.getDate() + 6);
                            const wKey = `${endOfWeek.getFullYear()}-${String(endOfWeek.getMonth() + 1).padStart(2, "0")}-${String(endOfWeek.getDate()).padStart(2, "0")}`;
                            if (!weeklyAgg.has(wKey)) {
                                weeklyAgg.set(wKey, {
                                    incTotal: 0,
                                    incSimple: 0,
                                    incSimpleCbhp: 0,
                                    incSimplePart: 0,
                                    incDetailed: 0,
                                    cum: 0,
                                    startStr: `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()}`,
                                    endStr: `${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}`
                                });
                            }
                            const wAgg = weeklyAgg.get(wKey);
                            wAgg.incTotal += dayData.incTotal;
                            wAgg.incSimple += dayData.incSimpleTotal;
                            wAgg.incSimpleCbhp += dayData.incSimpleCbhp;
                            wAgg.incSimplePart += dayData.incSimplePart;
                            wAgg.incDetailed += dayData.incDetailed;
                            wAgg.cum = cumTotal;
                            currentDateObj.setDate(currentDateObj.getDate() + 1);
                        }
                    }
                    const latest = dailyRecords.length > 0 ? dailyRecords[dailyRecords.length - 1] : {
                        total: 0,
                        simpleTotal: 0,
                        detailedTotal: 0,
                        simpleCbhp: 0,
                        simplePart: 0
                    };
                    // 先月末の累計を取得するための処理を追加
                    dailyRecords.forEach({
                        "SpaceDiagnosisPage.useEffect": (d)=>{
                            if (d.num <= endOfPrevMonthNum) {
                                endOfPrevMonthTotal = d.total;
                                endOfPrevMonthSimple = d.simpleTotal;
                                endOfPrevMonthDetailed = d.detailedTotal;
                            }
                        }
                    }["SpaceDiagnosisPage.useEffect"]);
                    const monthlyRate = endOfPrevMonthTotal === 0 ? 100 : Math.round(latest.total / endOfPrevMonthTotal * 100);
                    const simpleRate = endOfPrevMonthSimple === 0 ? 100 : Math.round(latest.simpleTotal / endOfPrevMonthSimple * 100);
                    const detailedRate = endOfPrevMonthDetailed === 0 ? 100 : Math.round(latest.detailedTotal / endOfPrevMonthDetailed * 100);
                    const buildTable = {
                        "SpaceDiagnosisPage.useEffect.buildTable": (aggMap, labelGen)=>{
                            const arr = Array.from(aggMap.entries()).map({
                                "SpaceDiagnosisPage.useEffect.buildTable.arr": ([k, v])=>({
                                        label: labelGen(k, v),
                                        ...v
                                    })
                            }["SpaceDiagnosisPage.useEffect.buildTable.arr"]);
                            return arr.map({
                                "SpaceDiagnosisPage.useEffect.buildTable": (item, idx)=>{
                                    let rate = 100;
                                    if (idx > 0) {
                                        const prevCum = arr[idx - 1].cum;
                                        rate = prevCum <= 0 ? 100 : Math.round(item.cum / prevCum * 100);
                                    }
                                    return {
                                        ...item,
                                        rate: `${rate}%`
                                    };
                                }
                            }["SpaceDiagnosisPage.useEffect.buildTable"]).reverse();
                        }
                    }["SpaceDiagnosisPage.useEffect.buildTable"];
                    const monthlyTable = buildTable(monthlyAgg, {
                        "SpaceDiagnosisPage.useEffect.monthlyTable": (k)=>k
                    }["SpaceDiagnosisPage.useEffect.monthlyTable"]).map({
                        "SpaceDiagnosisPage.useEffect.monthlyTable": (r)=>({
                                month: r.label,
                                total: formatDiff(r.incTotal),
                                simpleCbhp: formatDiff(r.incSimpleCbhp),
                                simplePart: formatDiff(r.incSimplePart),
                                full: formatDiff(r.incDetailed),
                                cumulative: r.cum.toLocaleString(),
                                rate: r.rate
                            })
                    }["SpaceDiagnosisPage.useEffect.monthlyTable"]);
                    const weeklyTable = buildTable(weeklyAgg, {
                        "SpaceDiagnosisPage.useEffect.weeklyTable": (k, v)=>{
                            const endDay = parseInt(v.endStr.split("/")[1], 10);
                            return `${v.endStr.split("/")[0]}月第${Math.ceil(endDay / 7)}週 (${v.startStr}-${v.endStr})`;
                        }
                    }["SpaceDiagnosisPage.useEffect.weeklyTable"]).map({
                        "SpaceDiagnosisPage.useEffect.weeklyTable": (r)=>({
                                week: r.label,
                                total: formatDiff(r.incTotal),
                                simpleCbhp: formatDiff(r.incSimpleCbhp),
                                simplePart: formatDiff(r.incSimplePart),
                                full: formatDiff(r.incDetailed),
                                cumulative: r.cum.toLocaleString(),
                                rate: r.rate
                            })
                    }["SpaceDiagnosisPage.useEffect.weeklyTable"]);
                    const simpleOrder = Object.keys(SIMPLE_TYPE_LABELS);
                    const simpleTypeDistribution = Array.from(simpleTypeMap.entries()).sort({
                        "SpaceDiagnosisPage.useEffect.simpleTypeDistribution": (a, b)=>simpleOrder.indexOf(a[0]) - simpleOrder.indexOf(b[0])
                    }["SpaceDiagnosisPage.useEffect.simpleTypeDistribution"]).map({
                        "SpaceDiagnosisPage.useEffect.simpleTypeDistribution": ([k, v])=>({
                                name: SIMPLE_TYPE_LABELS[k] || k,
                                value: v,
                                color: SIMPLE_TYPE_COLORS[k] || "#ccc"
                            })
                    }["SpaceDiagnosisPage.useEffect.simpleTypeDistribution"]);
                    const detailedOrder = Object.keys(DETAILED_TYPE_LABELS);
                    const detailedTypeDistribution = Array.from(detailedTypeMap.entries()).sort({
                        "SpaceDiagnosisPage.useEffect.detailedTypeDistribution": (a, b)=>detailedOrder.indexOf(a[0]) - detailedOrder.indexOf(b[0])
                    }["SpaceDiagnosisPage.useEffect.detailedTypeDistribution"]).map({
                        "SpaceDiagnosisPage.useEffect.detailedTypeDistribution": ([k, v])=>({
                                name: k,
                                value: v,
                                color: DETAILED_TYPE_COLORS[k] || "#ccc"
                            })
                    }["SpaceDiagnosisPage.useEffect.detailedTypeDistribution"]);
                    const monthlyByVersion = Array.from(monthlyAgg.entries()).slice(-4).map({
                        "SpaceDiagnosisPage.useEffect.monthlyByVersion": ([k, v])=>({
                                name: k,
                                簡易版_CBHP: v.incSimpleCbhp,
                                簡易版_参加者: v.incSimplePart,
                                完全版: v.incDetailed
                            })
                    }["SpaceDiagnosisPage.useEffect.monthlyByVersion"]);
                    const weeklyByVersion = Array.from(weeklyAgg.values()).slice(-4).map({
                        "SpaceDiagnosisPage.useEffect.weeklyByVersion": (v)=>{
                            const endDay = parseInt(v.endStr.split("/")[1], 10);
                            return {
                                name: `${v.endStr.split("/")[0]}月第${Math.ceil(endDay / 7)}週`,
                                簡易版_CBHP: v.incSimpleCbhp,
                                簡易版_参加者: v.incSimplePart,
                                完全版: v.incDetailed
                            };
                        }
                    }["SpaceDiagnosisPage.useEffect.weeklyByVersion"]);
                    const monthlySimpleTypeTrend = Array.from(monthlySimpleTypeMap.values()).sort({
                        "SpaceDiagnosisPage.useEffect.monthlySimpleTypeTrend": (a, b)=>a.name.localeCompare(b.name)
                    }["SpaceDiagnosisPage.useEffect.monthlySimpleTypeTrend"]).slice(-6);
                    const monthlyDetailedTypeTrend = Array.from(monthlyDetailedTypeMap.values()).sort({
                        "SpaceDiagnosisPage.useEffect.monthlyDetailedTypeTrend": (a, b)=>a.name.localeCompare(b.name)
                    }["SpaceDiagnosisPage.useEffect.monthlyDetailedTypeTrend"]).slice(-6);
                    setData({
                        summary: {
                            totalParticipants: latest.total,
                            thisWeek: {
                                total: thisWeekTotal,
                                simple: thisWeekSimpleTotal,
                                cbhp: thisWeekSimpleCbhp,
                                part: thisWeekSimplePart,
                                detailed: thisWeekDetailed
                            },
                            thisMonth: {
                                total: thisMonthTotal,
                                simple: thisMonthSimpleTotal,
                                cbhp: thisMonthSimpleCbhp,
                                part: thisMonthSimplePart,
                                detailed: thisMonthDetailed
                            },
                            todayTotal: todayTotal,
                            todaySimpleCbhp: todaySimpleCbhp,
                            todaySimplePart: todaySimplePart,
                            todaySimpleTotal: todaySimpleTotal,
                            todayDetailed: todayDetailed,
                            monthlyIncrease: thisMonthTotal,
                            monthlyRate,
                            fullVersionParticipants: latest.detailedTotal,
                            fullVersionRate: detailedRate,
                            simpleVersionParticipants: latest.simpleTotal,
                            simpleVersionRate: simpleRate,
                            simpleCbhpParticipants: latest.simpleCbhp,
                            simplePartParticipants: latest.simplePart
                        },
                        charts: {
                            participantsTrend: dailyRecords.map({
                                "SpaceDiagnosisPage.useEffect": (d)=>({
                                        name: d.dateKey,
                                        全体: d.total,
                                        完全版: d.detailedTotal,
                                        簡易版_合計: d.simpleTotal,
                                        簡易版_CBHP: d.simpleCbhp,
                                        簡易版_参加者: d.simplePart
                                    })
                            }["SpaceDiagnosisPage.useEffect"]),
                            simpleTypeDistribution,
                            detailedTypeDistribution,
                            monthlySimpleTypeTrend,
                            monthlyDetailedTypeTrend,
                            monthlyByVersion,
                            weeklyByVersion
                        },
                        axisCounts,
                        simpleAxisCounts,
                        tables: {
                            monthlyTable,
                            weeklyTable,
                            questionsData
                        }
                    });
                }
            }["SpaceDiagnosisPage.useEffect"]).catch({
                "SpaceDiagnosisPage.useEffect": (err)=>console.error("Data Load Error:", err)
            }["SpaceDiagnosisPage.useEffect"]);
        }
    }["SpaceDiagnosisPage.useEffect"], []);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 1052,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "診断データを集計中..."
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 1053,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/type-page.tsx",
            lineNumber: 1051,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/type-page.tsx",
        lineNumber: 1050,
        columnNumber: 7
    }, this);
    const { summary = {}, charts = {}, axisCounts = {}, simpleAxisCounts = {
        R: 0,
        D: 0,
        I: 0,
        O: 0,
        P: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        }
    }, tables = {} } = data;
    const pSegments = [
        {
            label: "P=1",
            count: simpleAxisCounts?.P?.[1] || 0,
            color: "#fed7aa"
        },
        {
            label: "P=2",
            count: simpleAxisCounts?.P?.[2] || 0,
            color: "#fdba74"
        },
        {
            label: "P=3",
            count: simpleAxisCounts?.P?.[3] || 0,
            color: "#fb923c"
        },
        {
            label: "P=4",
            count: simpleAxisCounts?.P?.[4] || 0,
            color: "#f97316"
        },
        {
            label: "P=5",
            count: simpleAxisCounts?.P?.[5] || 0,
            color: "#ea580c"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-foreground",
                        children: "宇宙タイプ診断 分析"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1082,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "診断参加者数、簡易版（CBHP/参加者ページ）・完全版の利用状況、各軸の傾向を確認できます。"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1085,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1LcbLG6GYqNZXlx38ZXqgLZ0OlLBLavd8VSJZEayfXYs/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)(簡易版_CBHP)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1099,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1094,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1088,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1LiOtm3NW4NGMQuchAjnSj_26rK3K9AaxSo4Autphi8Y/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)(簡易版_参加者)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/13yFYKDVm0g09Vw6cyHN9Hr4H2n66CL9SpPDJ-mytLb0/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)(完全版)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1124,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1081,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-5 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "総参加者数",
                        value: summary.totalParticipants?.toLocaleString() || 0,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "簡易版の参加者数 (合計)",
                        value: summary.simpleVersionParticipants?.toLocaleString() || 0,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                        accentColor: "primary",
                        description: `CBHP: ${summary.simpleCbhpParticipants?.toLocaleString() || 0} 人 / 参加者: ${summary.simplePartParticipants?.toLocaleString() || 0} 人`
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "簡易版の先月末比",
                        value: summary.simpleVersionRate || 0,
                        unit: "%",
                        trendValue: "先月末比",
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "完全版の参加者数",
                        value: summary.fullVersionParticipants?.toLocaleString() || 0,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                        accentColor: "accent"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "完全版の先月末比",
                        value: summary.fullVersionRate || 0,
                        unit: "%",
                        trendValue: "先月末比",
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-5 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今日の参加数",
                        value: `+${summary.todayTotal || 0}`,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        accentColor: "warning",
                        description: `簡易版: +${summary.todaySimpleTotal || 0} (CBHP: +${summary.todaySimpleCbhp || 0} / 参加者: +${summary.todaySimplePart || 0}) 完全版: +${summary.todayDetailed || 0}`
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今週の参加数",
                        value: `+${summary.thisWeek?.total || 0}`,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
                        accentColor: "primary",
                        description: `簡易版: +${summary.thisWeek?.simple || 0} (CBHP: +${summary.thisWeek?.cbhp || 0} / 参加者: +${summary.thisWeek?.part || 0}) 完全版: +${summary.thisWeek?.detailed || 0}`
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "今月の参加数",
                        value: `+${summary.thisMonth?.total || 0}`,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                        accentColor: "success",
                        description: `簡易版: +${summary.thisMonth?.simple || 0} (CBHP: +${summary.thisMonth?.cbhp || 0} / 参加者: +${summary.thisMonth?.part || 0}) 完全版: +${summary.thisMonth?.detailed || 0}`
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "全体の先週末比",
                        value: summary.weeklyRate || 0,
                        unit: "%",
                        trendValue: "先週末比",
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "全体の先月末比",
                        value: summary.monthlyRate || 0,
                        unit: "%",
                        trendValue: "先月末比",
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "診断参加者数推移 (累計)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                    height: "h-[320px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartComponent"], {
                        data: charts.participantsTrend?.slice(-90) || [],
                        lines: [
                            {
                                dataKey: "全体",
                                name: "全体",
                                color: "#38BDF8"
                            },
                            {
                                dataKey: "完全版",
                                name: "完全版",
                                color: "#22C55E"
                            },
                            {
                                dataKey: "簡易版_合計",
                                name: "簡易版(合)",
                                color: "#8B5CF6"
                            },
                            {
                                dataKey: "簡易版_CBHP",
                                name: "簡易(CBHP)",
                                color: "#a78bfa"
                            },
                            {
                                dataKey: "簡易版_参加者",
                                name: "簡易(参加)",
                                color: "#c4b5fd"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1224,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 1223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "簡易版：各軸の傾向分析",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 flex flex-col justify-center h-[350px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AxisBar, {
                                    labelLeft: "R",
                                    countLeft: simpleAxisCounts?.R || 0,
                                    colorLeft: "#d1d5db",
                                    labelRight: "D",
                                    countRight: simpleAxisCounts?.D || 0,
                                    colorRight: "#6b7280"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AxisBar, {
                                    labelLeft: "I",
                                    countLeft: simpleAxisCounts?.I || 0,
                                    colorLeft: "#d1d5db",
                                    labelRight: "O",
                                    countRight: simpleAxisCounts?.O || 0,
                                    colorRight: "#6b7280"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MultiSegmentBar, {
                                    title: "P（5段階分布）",
                                    segments: pSegments
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1243,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "簡易版 4タイプ割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[350px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.simpleTypeDistribution || [],
                                centerLabel: "簡易版"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 1265,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1264,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "【簡易版】 4大タイプ 月別増加推移",
                        description: "どのタイプがいつ増えたか",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[500px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                data: charts.monthlySimpleTypeTrend || [],
                                bars: [
                                    {
                                        dataKey: "RI",
                                        name: "天文台トラベラー",
                                        color: SIMPLE_TYPE_COLORS["RI"]
                                    },
                                    {
                                        dataKey: "DI",
                                        name: "人工衛星",
                                        color: SIMPLE_TYPE_COLORS["DI"]
                                    },
                                    {
                                        dataKey: "RO",
                                        name: "ロケット打ち上げ",
                                        color: SIMPLE_TYPE_COLORS["RO"]
                                    },
                                    {
                                        dataKey: "DO",
                                        name: "宇宙ステーション",
                                        color: SIMPLE_TYPE_COLORS["DO"]
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 1276,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1275,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1271,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "完全版：各軸の傾向分析",
                        description: "全参加者のパラメータ分布",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 flex flex-col justify-center h-[350px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AxisBar, {
                                    labelLeft: "関心の方向 (R: ロマン)",
                                    countLeft: axisCounts?.R || 0,
                                    colorLeft: "#d1d5db",
                                    labelRight: "(P: 実用)",
                                    countRight: axisCounts?.P || 0,
                                    colorRight: "#6b7280"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AxisBar, {
                                    labelLeft: "関わり方 (V: 受動)",
                                    countLeft: axisCounts?.V || 0,
                                    colorLeft: "#d1d5db",
                                    labelRight: "(A: 能動)",
                                    countRight: axisCounts?.A || 0,
                                    colorRight: "#6b7280"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1318,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AxisBar, {
                                    labelLeft: "対象スケール (X: マクロ)",
                                    countLeft: axisCounts?.X || 0,
                                    colorLeft: "#d1d5db",
                                    labelRight: "(M: ミクロ)",
                                    countRight: axisCounts?.M || 0,
                                    colorRight: "#6b7280"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AxisBar, {
                                    labelLeft: "社会との距離 (I: 個人)",
                                    countLeft: axisCounts?.I || 0,
                                    colorLeft: "#d1d5db",
                                    labelRight: "(S: 社会)",
                                    countRight: axisCounts?.S || 0,
                                    colorRight: "#6b7280"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1334,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1309,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "完全版 16タイプ割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[350px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.detailedTypeDistribution || [],
                                centerLabel: "完全版"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 1346,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1345,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "【完全版】 16タイプ 月別増加推移",
                        description: "完全版の16タイプの月別増加推移",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[500px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                data: charts.monthlyDetailedTypeTrend || [],
                                bars: Object.keys(DETAILED_TYPE_LABELS).map((key)=>({
                                        dataKey: key,
                                        name: key,
                                        color: DETAILED_TYPE_COLORS[key]
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 1357,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1356,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "完全版 16タイプ一覧",
                description: "カラーコードと正式名称の対応表",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-2",
                    children: Object.entries(DETAILED_TYPE_LABELS).map(([key, label])=>{
                        // 集計済みのデータから人数を取得
                        const count = charts.detailedTypeDistribution?.find((d)=>d.name === key)?.value || 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2 p-3 border border-border/50 rounded-xl bg-secondary/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 truncate",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 rounded-full flex-shrink-0 shadow-sm",
                                            style: {
                                                backgroundColor: DETAILED_TYPE_COLORS[key]
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                            lineNumber: 1385,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-foreground font-medium truncate",
                                            title: label,
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                            lineNumber: 1389,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1384,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-muted-foreground whitespace-nowrap",
                                    children: [
                                        count,
                                        "人"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1396,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1380,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 1372,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月別 参加者増加数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                data: charts.monthlyByVersion || [],
                                bars: [
                                    {
                                        dataKey: "簡易版_CBHP",
                                        name: "簡易(CBHP)",
                                        color: "#a78bfa"
                                    },
                                    {
                                        dataKey: "簡易版_参加者",
                                        name: "簡易(参加者)",
                                        color: "#c4b5fd"
                                    },
                                    {
                                        dataKey: "完全版",
                                        name: "完全版",
                                        color: "#22C55E"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 1408,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1407,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1406,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "週別 参加者増加数 (月〜日)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                data: charts.weeklyByVersion || [],
                                bars: [
                                    {
                                        dataKey: "簡易版_CBHP",
                                        name: "簡易(CBHP)",
                                        color: "#a78bfa"
                                    },
                                    {
                                        dataKey: "簡易版_参加者",
                                        name: "簡易(参加者)",
                                        color: "#c4b5fd"
                                    },
                                    {
                                        dataKey: "完全版",
                                        name: "完全版",
                                        color: "#22C55E"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 1432,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1431,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1430,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1405,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月単位の参加者増加人数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "month",
                                    label: "月",
                                    align: "left"
                                },
                                {
                                    key: "cumulative",
                                    label: "累計",
                                    align: "right"
                                },
                                {
                                    key: "total",
                                    label: "合計増",
                                    align: "right"
                                },
                                {
                                    key: "simpleCbhp",
                                    label: "簡易(CBHP)",
                                    align: "right"
                                },
                                {
                                    key: "simplePart",
                                    label: "簡易(参加者)",
                                    align: "right"
                                },
                                {
                                    key: "full",
                                    label: "完全版",
                                    align: "right"
                                },
                                {
                                    key: "rate",
                                    label: "前月比",
                                    align: "right"
                                }
                            ],
                            data: tables.monthlyTable || []
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1457,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "週単位の参加者増加人数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "week",
                                    label: "週 (月〜日)",
                                    align: "left"
                                },
                                {
                                    key: "cumulative",
                                    label: "累計",
                                    align: "right"
                                },
                                {
                                    key: "total",
                                    label: "合計増",
                                    align: "right"
                                },
                                {
                                    key: "simpleCbhp",
                                    label: "簡易(CBHP)",
                                    align: "right"
                                },
                                {
                                    key: "simplePart",
                                    label: "簡易(参加者)",
                                    align: "right"
                                },
                                {
                                    key: "full",
                                    label: "完全版",
                                    align: "right"
                                },
                                {
                                    key: "rate",
                                    label: "前週比",
                                    align: "right"
                                }
                            ],
                            data: tables.weeklyTable || []
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                            lineNumber: 1471,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1470,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "設問別 回答割合",
                description: "各質問ごとに選択された回答の分布状況です",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full overflow-x-auto mt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-sm text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "text-xs text-muted-foreground bg-secondary/50 border-b border-border/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-medium whitespace-nowrap",
                                            children: "ID"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                            lineNumber: 1494,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-medium whitespace-nowrap",
                                            children: "設問内容"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                            lineNumber: 1495,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-medium text-right whitespace-nowrap",
                                            children: "回答数"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                            lineNumber: 1498,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-medium",
                                            children: "回答割合"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                            lineNumber: 1501,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                    lineNumber: 1493,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 1492,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-border/50",
                                children: tables.questionsData.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-secondary/20 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 font-medium text-foreground whitespace-nowrap",
                                                children: q.key
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                                lineNumber: 1507,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-foreground font-medium",
                                                children: q.question
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                                lineNumber: 1510,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-right text-muted-foreground",
                                                children: q.count.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                                lineNumber: 1513,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 min-w-[300px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DistributionBar, {
                                                    item: q
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                                    lineNumber: 1517,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                                lineNumber: 1516,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                        lineNumber: 1506,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                                lineNumber: 1504,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/type-page.tsx",
                        lineNumber: 1491,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/type-page.tsx",
                    lineNumber: 1490,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/type-page.tsx",
                lineNumber: 1485,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/type-page.tsx",
        lineNumber: 1080,
        columnNumber: 5
    }, this);
}
_s(SpaceDiagnosisPage, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c3 = SpaceDiagnosisPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AxisBar");
__turbopack_context__.k.register(_c1, "MultiSegmentBar");
__turbopack_context__.k.register(_c2, "DistributionBar");
__turbopack_context__.k.register(_c3, "SpaceDiagnosisPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/links-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinksPage",
    ()=>LinksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-list.js [app-client] (ecmascript) <export default as LayoutList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$spline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartSpline$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-spline.js [app-client] (ecmascript) <export default as ChartSpline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Focus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/focus.js [app-client] (ecmascript) <export default as Focus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/notebook.js [app-client] (ecmascript) <export default as Notebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquarePlay$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-play.js [app-client] (ecmascript) <export default as SquarePlay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-git.js [app-client] (ecmascript) <export default as FolderGit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const initialLinkCategories = [
    {
        id: 'general',
        label: '一般',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        links: [
            {
                id: 'general-1',
                title: 'ホーム',
                url: 'https://fsifofficial.github.io/CosmoBase/',
                description: 'CBホームページ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                subCategory: 'Webサイト'
            },
            {
                id: 'general-7',
                title: 'FSIF HP',
                url: 'https://fsifofficial.wixsite.com/future-space-industr',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                subCategory: 'Webサイト'
            },
            {
                id: 'general-2',
                title: 'X',
                url: 'https://x.com/CosmoBase',
                description: 'CB X',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
                subCategory: 'SNS'
            },
            {
                id: 'general-3',
                title: 'Instagram',
                url: 'https://www.instagram.com/cosmobase.official',
                description: 'CB Instagram',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Focus$3e$__["Focus"],
                subCategory: 'SNS'
            },
            {
                id: 'general-4',
                title: 'note',
                url: 'https://note.com/cosmobase',
                description: 'CB note',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notebook$3e$__["Notebook"],
                subCategory: 'SNS'
            },
            {
                id: 'general-5',
                title: 'YouTube',
                url: 'https://www.youtube.com/channel/UC3bcWCM6ccvsyQyiXLIwhkQ',
                description: 'CB YouTube',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquarePlay$3e$__["SquarePlay"],
                subCategory: 'SNS'
            },
            {
                id: 'general-6',
                title: 'Peatix',
                url: 'https://peatix.com/user/29355410/dashboard',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                subCategory: ''
            }
        ]
    },
    {
        id: 'member',
        label: '参加者',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        links: [
            {
                id: 'member-1',
                title: '参加者ホーム',
                url: 'https://cosmo-base.github.io/member_only/',
                description: '参加者向けトップページ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                subCategory: ''
            },
            {
                id: 'member-2',
                title: 'CBL',
                url: 'https://cosmo-base.github.io/library/index.html',
                description: 'Cosmo Base Library',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                subCategory: ''
            },
            {
                id: 'member-3',
                title: 'CBED',
                url: 'https://cosmo-base.github.io/member_only/CBED/',
                description: 'Cosmo Base Event Database',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                subCategory: ''
            },
            {
                id: 'member-4',
                title: 'CBMD',
                url: 'https://cosmo-base.github.io/member_only/CBMD/',
                description: 'Cosmo Base Museum Database',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                subCategory: ''
            }
        ]
    },
    {
        id: 'partner',
        label: 'パートナー',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
        links: [
            {
                id: 'partner-1',
                title: 'パートナーページ',
                url: 'https://cosmo-base.github.io/member_only/partner/',
                description: 'パートナー専用ページ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: ''
            },
            {
                id: 'partner-2',
                title: 'パートナー申請',
                url: 'https://cosmo-base.github.io/member_only/partner/join/',
                description: 'パートナー申請フォーム',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"],
                subCategory: ''
            }
        ]
    },
    {
        id: 'admin',
        label: '運営',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        links: [
            {
                id: 'admin-1',
                title: 'コミュニティードライブ',
                url: 'https://drive.google.com/drive/u/0/folders/1odqLTxdIc9T91aneRIdraf1YY44aeqcC',
                description: '運営共有ドライブ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"],
                subCategory: 'ドライブ・資料'
            },
            {
                id: 'admin-11',
                title: '初期のブランディング',
                url: 'https://docs.google.com/spreadsheets/d/1BRjUW9K0S7OVqKs4oN4zEPPFnGQnF89KoqDq0a1CY-k/edit',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subCategory: 'ドライブ・資料'
            },
            {
                id: 'admin-2',
                title: '招待リンク一覧',
                url: 'https://docs.google.com/document/d/1hhsrqBj57j58JzkmIlQOgizK3zfGzm5_xUGK_kB-Rbk/edit?tab=t.0',
                description: 'コミュニティ招待リンクの管理',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"],
                subCategory: '管理・運用シート'
            },
            {
                id: 'admin-5',
                title: 'パートナー営業',
                url: 'https://docs.google.com/spreadsheets/d/1Nbq6rD_PfF1-KdIXqlq4wCVPA6SWITvDroO5eKe42Q4/edit',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'admin-10',
                title: 'パートナー営業資料',
                url: 'https://drive.google.com/drive/u/0/folders/1g-u-D4AWqQQeO7SheKx7m0bgiaGvQ326',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'admin-6',
                title: 'パートナー公開チェックリスト',
                url: 'https://docs.google.com/spreadsheets/d/1SoZ2O92aYnMXRBuFU7-vV7gX4vItVbxnIoKhGVxpo4s/edit?gid=1104332422#gid=1104332422',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'admin-12',
                title: 'パートナー申請データ',
                url: 'https://docs.google.com/spreadsheets/d/1PtyAO6VeBwgZcFsiiUhQseg6ugZJmMI_Di6N5StMQiA/edit',
                description: 'パートナー申請の管理シート',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'admin-7',
                title: '宇宙知っトク進捗確認',
                url: 'https://docs.google.com/spreadsheets/d/1Clqn3sHYbpthvFKzb2XAaQ8RLHwWSOYxgkvm4HxoJp0/edit',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                subCategory: '宇宙知っトク'
            },
            {
                id: 'admin-3',
                title: 'SNS投稿テンプレート',
                url: 'https://docs.google.com/spreadsheets/d/15F49NGpyEEjdRAEKAHAeBpkH4HWsiZXpEyMAiLCniPo/edit?gid=0#gid=0',
                description: 'SNS投稿用のテンプレート集',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                subCategory: 'SNS'
            },
            {
                id: 'admin-8',
                title: 'Instagramビジネス投稿(Cosmo Base)',
                url: 'https://business.facebook.com/latest/home?asset_id=922321694307649&business_id=2338074866656029',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Focus$3e$__["Focus"],
                subCategory: 'SNS'
            },
            {
                id: 'admin-9',
                title: 'Instagramビジネス投稿(FSIF)',
                url: 'https://business.facebook.com/latest/home?asset_id=416684408195963&business_id=1693962128107258',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Focus$3e$__["Focus"],
                subCategory: 'SNS'
            },
            {
                id: 'admin-4',
                title: 'Union',
                url: 'https://campus-union-connect.base44.app/Home',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subCategory: ''
            },
            {
                id: "admin-13",
                title: "自動化率計算",
                url: "https://docs.google.com/spreadsheets/d/1E4jZU_L3FDT-1ZGlneUTu3Wbry9zJeZipk96p5NV7l8/edit",
                description: "",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subCategory: "管理・運用シート"
            }
        ]
    },
    {
        id: 'admin2',
        label: '開発',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        links: [
            {
                id: 'admin2-1',
                title: 'FSIF Github',
                url: 'https://github.com/FSIFofficial',
                description: 'CBHP,AIBot',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit$3e$__["FolderGit"],
                subCategory: ''
            },
            {
                id: 'admin2-2',
                title: 'CB Github',
                url: 'https://github.com/cosmo-base/',
                description: '参加者、CBL、KPI,CBBot',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit$3e$__["FolderGit"],
                subCategory: ''
            },
            {
                id: 'admin2-3',
                title: 'FSIF HP 編集',
                url: 'https://manage.wix.com/dashboard/5676783d-ee0f-4707-a11d-e960efead3e1/setup?referralInfo=my-sites',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit$3e$__["FolderGit"],
                subCategory: ''
            },
            {
                id: 'admin2-4',
                title: 'CBHP analytics',
                url: 'https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/a385612556p525984972/reports/intelligenthome?params=_u..nav%3Dmaui',
                description: 'GA4解析ツール',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$spline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartSpline$3e$__["ChartSpline"],
                subCategory: ''
            },
            {
                id: 'admin2-5',
                title: 'パートナーロゴ格納箱',
                url: 'https://supabase.com/dashboard/project/oqomwuhrvqoozfujgtsj/storage/files/buckets/library',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit$3e$__["FolderGit"],
                subCategory: ''
            }
        ]
    },
    {
        id: 'manage',
        label: '原本',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        links: [
            {
                id: 'manage-1',
                title: 'KPI',
                url: 'https://docs.google.com/spreadsheets/d/1DVcnAj75n_Hokt74Q-SX_FI_J5PSbJiOzhvwJfHggFM/edit?gid=0#gid=0',
                description: 'KPIデータの原本（Discord,SNS）',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                subCategory: 'Discord, SNS'
            },
            {
                id: 'manage-2',
                title: 'クイズ総回答数',
                url: 'https://docs.google.com/spreadsheets/d/113XXwG9heW_Vv173SH_pp9w8cwRgWzC341jbXeaJ22w/edit',
                description: '宇宙クイズの回答データ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                subCategory: '毎日宇宙クイズ'
            },
            {
                id: 'manage-3',
                title: 'CBL',
                url: 'https://docs.google.com/spreadsheets/d/1QtgJJiX1dBq_jXtbEgD88v9ZgSCcZSr2cObcnglKsNQ/edit',
                description: 'CBLの原本スプレッドシート',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                subCategory: 'CBL'
            },
            {
                id: 'manage-4',
                title: 'CBED原本',
                url: 'https://docs.google.com/spreadsheets/d/1jl7DqMAcPN92p7RbMeLRE7RPuvea3j-lsAMSs8M1Xj4/edit',
                description: 'CBEDの原本スプレッドシート、ロケット打ち上げ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                subCategory: 'CBED'
            },
            {
                id: 'manage-5',
                title: 'CBMD原本',
                url: 'https://docs.google.com/spreadsheets/d/1gdD3uqzvQWZMmn0UK6LZm_TIWS53Ar8tR80E8cz-ybY/edit',
                description: 'CBMDの原本',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                subCategory: 'CBMD'
            },
            {
                id: 'manage-6',
                title: 'パートナー一覧',
                url: 'https://docs.google.com/spreadsheets/d/1FL6G_-IpL4Yck1tds7hqFL1pqJ85RDt1oyVE545WOZQ/edit',
                description: 'CBHPパートナーデータ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'manage-7',
                title: 'パートナー分析',
                url: 'https://docs.google.com/spreadsheets/d/1Nbq6rD_PfF1-KdIXqlq4wCVPA6SWITvDroO5eKe42Q4/edit',
                description: 'パートナーデータ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'manage-11',
                title: 'CBHP分析',
                url: 'https://docs.google.com/spreadsheets/d/1QwgyndR230Vtr2qiWAgw0FNQEaCfdA1VYagoRE2rxOQ/edit',
                description: 'GA4からとってきたCBHPトラッキングデータ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                subCategory: 'CBHP'
            },
            {
                id: 'manage-8',
                title: '宇宙タイプ診断簡易版データ(CBHP)',
                url: 'https://docs.google.com/spreadsheets/d/1LcbLG6GYqNZXlx38ZXqgLZ0OlLBLavd8VSJZEayfXYs/edit',
                description: '宇宙タイプ診断 簡易版診断データ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                subCategory: '宇宙タイプ診断'
            },
            {
                id: 'manage-9',
                title: '宇宙タイプ診断簡易版データ(参加者)',
                url: 'https://docs.google.com/spreadsheets/d/1LiOtm3NW4NGMQuchAjnSj_26rK3K9AaxSo4Autphi8Y/edit',
                description: '宇宙タイプ診断 簡易版診断データ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                subCategory: '宇宙タイプ診断'
            },
            {
                id: 'manage-10',
                title: '宇宙タイプ診断詳細版診断データ',
                url: 'https://docs.google.com/spreadsheets/d/13yFYKDVm0g09Vw6cyHN9Hr4H2n66CL9SpPDJ-mytLb0/edit',
                description: '宇宙タイプ診断 完全版診断データ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                subCategory: '宇宙タイプ診断'
            },
            {
                id: 'manage-12',
                title: '行ってきた スプレッドシート',
                url: 'https://docs.google.com/spreadsheets/d/1LfqPf4W1Cv2vPxa7FXC2Cx4WMWPN3i1L1qhUIuaFo4Y/edit',
                description: '行ってきた管理リスト(参加者ページ反映)',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                subCategory: '行ってきた'
            },
            {
                id: 'manage-13',
                title: '宇宙知っトク進捗確認 スプレッドシート',
                url: 'https://docs.google.com/spreadsheets/d/1Clqn3sHYbpthvFKzb2XAaQ8RLHwWSOYxgkvm4HxoJp0/edit',
                description: '知っトク管理リスト(参加者ページ反映)',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                subCategory: '宇宙知っトク'
            }
        ]
    },
    {
        id: 'form',
        label: 'フォーム',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"],
        links: [
            {
                id: 'form-1',
                title: 'CosmoBase お問い合わせ',
                url: 'https://docs.google.com/forms/d/1TwH-_aVNWMhbxnjIEDwOu0nDnGJVzUoByAxKkgWwAgk/edit',
                description: 'CBHP お問い合わせ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"],
                subCategory: 'お問い合わせ'
            },
            {
                id: 'form-2',
                title: 'Cosmo Base パートナー制度 お問い合わせ',
                url: 'https://docs.google.com/forms/d/17CJ_KNtX5HUJj4G8PX1POWuJ1BCbu3kHI4uk_G-mq7k/edit',
                description: 'CBHP パートナーお問い合わせ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"],
                subCategory: 'パートナー'
            },
            {
                id: 'form-3',
                title: 'パートナー申請データ',
                url: 'https://docs.google.com/spreadsheets/d/1PtyAO6VeBwgZcFsiiUhQseg6ugZJmMI_Di6N5StMQiA/edit',
                description: 'パートナー申請の管理シート',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'form-4',
                title: 'パートナー修正データ',
                url: 'https://docs.google.com/spreadsheets/d/1kBId4mWEhDfoW3pjTAlbO7Cvyh-z7Y4CiQgtjkIbNdk/edit?gid=0#gid=0',
                description: 'パートナーページ 修正データ',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'form-5',
                title: 'CBLパートナー資料格納',
                url: 'https://docs.google.com/spreadsheets/d/1Jk8IJ3l__qBzjWuOPbWY6p8_863Fniz6uzDjiuYO6v4/edit?gid=0#gid=0',
                description: 'パートナーページ CBL資料格納申請フォーム',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'form-8',
                title: 'アンケート確認',
                url: 'https://docs.google.com/forms/d/1q-zSXsQMkC69FnN85awN7aq4qSVZPLFaEuW7anYCRDU/edit',
                description: 'パートナーページ アンケート確認フォーム',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'form-6',
                title: 'イベント登壇申請データ',
                url: 'https://docs.google.com/spreadsheets/d/1Yq6BzFS4iZi4IL4bh9AQyTwXn5ZNjUUFJ1yrXULU0fA/edit?gid=0#gid=0',
                description: 'パートナーページ 知っトク登壇申請フォーム',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'form-7',
                title: 'メンバー申請',
                url: 'https://docs.google.com/forms/d/1aeTY1RA-LENst3fB7N0sawSngwqZg6Fhro6o3dCXQnM/edit',
                description: 'パートナーページ メンバー申請フォーム',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'form-9',
                title: 'Cosmo Base 匿名質問フォーム',
                url: 'https://docs.google.com/forms/d/1LEBog2v-TAOpL28RgmJNzteWHrXNPm-wM9dbPl4wbNY/edit',
                description: '参加者ページ 宇宙教えて 匿名質問フォーム',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"],
                subCategory: '宇宙教えて'
            },
            {
                id: 'form-10',
                title: 'イベント登録',
                url: 'https://docs.google.com/forms/d/1m-6FLHRjzG5MDQL5Xix4ms2JVeMS8cXTSygVBsjGoh4/edit',
                description: '参加者ページ CBED イベント追加フォーム',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"],
                subCategory: 'CBED'
            },
            {
                id: 'form-11',
                title: 'イベントテーマ希望フォーム',
                url: 'https://docs.google.com/forms/d/1hAQvD1RB_aMA8sSDXnfsfKFfj_SnWtLH3RJhXfZEpoY/edit',
                description: '参加者ページ 宇宙知っトク リクエストフォーム',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"],
                subCategory: '宇宙知っトク'
            },
            {
                id: 'form-12',
                title: '宇宙知っトク 参加後アンケート',
                url: 'https://docs.google.com/forms/d/14Gy8dIBSOwT69dqiBsCIEhq0Az4j9wCJ9_itZwsjR2Q/edit',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"],
                subCategory: '宇宙知っトク'
            },
            {
                id: 'form-12',
                title: 'CBMDお問い合わせ',
                url: 'https://docs.google.com/forms/d/1F2rcnOkK1R7oMBL4HrEle4yLU58ON108NKjUMVhp9Os/edit',
                description: '参加者ページ CBMD お問い合わせフォーム',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"],
                subCategory: 'CBMD'
            }
        ]
    },
    {
        id: 'design',
        label: 'デザイン',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        links: [
            {
                id: 'design-3',
                title: 'Instagram_汎用投稿_デザイン',
                url: 'https://canva.link/ac3ep7ya04p7ff0',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: 'SNS投稿用'
            },
            {
                id: 'design-4',
                title: 'Instagram_クイズ投稿_デザイン',
                url: 'https://canva.link/k9rtx04myz9upf5',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: 'SNS投稿用'
            },
            {
                id: 'design-11',
                title: '宇宙クイズ_問題&回答_デザイン',
                url: 'https://canva.link/v9q69e1cmw5xc8v',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: 'SNS投稿用'
            },
            {
                id: 'design-14',
                title: 'パートナー締結_サブ(Instagram)デザイン',
                url: 'https://canva.link/dcgka4ivmcz80tg',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'design-1',
                title: 'Instagram_イベント投稿_デザイン',
                url: 'https://canva.link/6ohgqrezzrde9dj',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: 'SNS投稿用'
            },
            {
                id: 'design-2',
                title: '宇宙知っトク_座談会用当日_資料',
                url: 'https://canva.link/sygrarpb5f0osz4',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: '資料・カバー画像'
            },
            {
                id: 'design-6',
                title: 'FSIF&CB_新歓_資料',
                url: 'https://canva.link/lyl255ilb5p40mm',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: '資料・カバー画像'
            },
            {
                id: 'design-9',
                title: '週間宇宙ニュース_表紙デザイン',
                url: 'https://canva.link/wyjmvia38dzv2cu',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: '資料・カバー画像'
            },
            {
                id: 'design-10',
                title: 'note_コンテンツ紹介_デザイン',
                url: 'https://canva.link/h8fsg4d8ielshsv',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: '資料・カバー画像'
            },
            {
                id: 'design-13',
                title: '宇宙知っトク_表紙_デザイン',
                url: 'https://canva.link/3oqqw9yl2iqbew8',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: '資料・カバー画像'
            },
            {
                id: 'design-5',
                title: 'CB_メイン背景_デザイン',
                url: 'https://canva.link/t4cehf79ym5swmz',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: 'ブランディング・宣伝'
            },
            {
                id: 'design-7',
                title: 'パートナー締結_メインデザイン',
                url: 'https://canva.link/1aakw2t0bjl906i',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                subCategory: 'パートナー'
            },
            {
                id: 'design-8',
                title: 'CBMDコンテンツ紹介_投稿用デザイン',
                url: 'https://canva.link/foa4xfbsrjn5lbp',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: 'ブランディング・宣伝'
            },
            {
                id: 'design-12',
                title: 'プレスリリース_表紙_デザイン',
                url: 'https://canva.link/ql3kf2fnhktw0l8',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                subCategory: 'ブランディング・宣伝'
            }
        ]
    },
    {
        id: 'external',
        label: '外部資料',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
        links: [
            {
                id: 'external-1',
                title: '宇宙システム株式会社_宇宙関連のイベント',
                url: 'https://space-sd.co.jp/symposium/symposium.html',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subCategory: ''
            },
            {
                id: 'external-2',
                title: '空畑',
                url: 'https://sorabatake.jp/',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subCategory: ''
            },
            {
                id: 'external-3',
                title: 'sorae',
                url: 'https://sorae.info/',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subCategory: ''
            },
            {
                id: 'external-4',
                title: 'SpaceMedia',
                url: 'https://spacemedia.jp/',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subCategory: ''
            },
            {
                id: 'external-5',
                title: 'SPACE CONNECT',
                url: 'https://space-connect.jp/',
                description: '',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subCategory: ''
            }
        ]
    }
];
function LinkCard({ link, delay }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const Icon = link.icon;
    const handleCopy = async (e)=>{
        e.stopPropagation();
        await navigator.clipboard.writeText(link.url);
        setCopied(true);
        setShowToast(true);
        setTimeout(()=>{
            setCopied(false);
            setShowToast(false);
        }, 2000);
    };
    const handleOpen = (e)=>{
        e?.stopPropagation();
        window.open(link.url, '_blank', 'noopener,noreferrer');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        transition: {
            duration: 0.3,
            delay: delay * 0.05
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass-card rounded-2xl p-5 cursor-pointer group transition-all duration-300", "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"),
        onClick: handleOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    className: "absolute top-2 right-2 bg-success/90 text-white text-xs px-3 py-1.5 rounded-lg z-10",
                    children: "URLをコピーしました"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/links-page.tsx",
                    lineNumber: 740,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                lineNumber: 738,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-5 w-5 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/links-page.tsx",
                            lineNumber: 753,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                        lineNumber: 752,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-foreground group-hover:text-primary transition-colors",
                                children: link.title
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: link.description
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 759,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground/60 mt-2 truncate font-mono",
                                children: link.url
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 760,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                        lineNumber: 755,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                lineNumber: 751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mt-4 pt-4 border-t border-border/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: handleCopy,
                        className: "flex-1 gap-2 bg-secondary/30 hover:bg-secondary/50 border-border/50",
                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-4 w-4 text-success"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                    lineNumber: 775,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: "コピー完了"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                    lineNumber: 776,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                    lineNumber: 780,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: "Copy"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                    lineNumber: 781,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                        lineNumber: 767,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleOpen();
                        },
                        className: "flex-1 gap-2 bg-primary/10 hover:bg-primary/20 border-primary/20 text-primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 794,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Open"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 795,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                        lineNumber: 785,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                lineNumber: 766,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/links-page.tsx",
        lineNumber: 727,
        columnNumber: 5
    }, this);
}
_s(LinkCard, "0sgWDd1Mzjmi1xLtioSjH/lbDss=");
_c = LinkCard;
function LinksPage() {
    _s1();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('general');
    const currentCategory = initialLinkCategories.find((cat)=>cat.id === activeCategory);
    // 選択されたタブのリンクをサブカテゴリでグループ化
    const groupedLinks = currentCategory?.links.reduce((acc, link)=>{
        const group = link.subCategory || 'その他';
        if (!acc[group]) acc[group] = [];
        acc[group].push(link);
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.4
        },
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 flex-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                className: "h-6 w-6 text-accent"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 825,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/links-page.tsx",
                            lineNumber: 824,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-foreground",
                                    children: "リンク管理"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                    lineNumber: 828,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Cosmo Base運営で利用するリンクを一元管理"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                    lineNumber: 829,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/links-page.tsx",
                            lineNumber: 827,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/pages/links-page.tsx",
                    lineNumber: 823,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                lineNumber: 822,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 flex-wrap",
                children: initialLinkCategories.map((category)=>{
                    const Icon = category.icon;
                    const isActive = activeCategory === category.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        onClick: ()=>setActiveCategory(category.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300', isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 glass-card'),
                        children: [
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "activeLinkTab",
                                className: "absolute inset-0 tab-active rounded-xl",
                                transition: {
                                    type: 'spring',
                                    bounce: 0.2,
                                    duration: 0.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 854,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                        lineNumber: 861,
                                        columnNumber: 17
                                    }, this),
                                    category.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs opacity-70",
                                        children: [
                                            "(",
                                            category.links.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                        lineNumber: 863,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 860,
                                columnNumber: 15
                            }, this)
                        ]
                    }, category.id, true, {
                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                        lineNumber: 841,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                lineNumber: 835,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: groupedLinks && Object.keys(groupedLinks).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: Object.entries(groupedLinks).map(([group, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scroll-mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-4 border-b border-border/50 pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1.5 h-5 bg-primary rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                                lineNumber: 885,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-foreground tracking-tight",
                                                children: group
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                                lineNumber: 886,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full",
                                                children: [
                                                    links.length,
                                                    "件"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                                lineNumber: 887,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                        lineNumber: 884,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkCard, {
                                                link: link,
                                                delay: index
                                            }, link.id, false, {
                                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                                lineNumber: 894,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                        lineNumber: 892,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, group, true, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 882,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                        lineNumber: 880,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card rounded-2xl p-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                className: "h-12 w-12 text-muted-foreground/50 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 906,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "このカテゴリにはまだリンクがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 907,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                        lineNumber: 905,
                        columnNumber: 13
                    }, this)
                }, activeCategory, false, {
                    fileName: "[project]/components/dashboard/pages/links-page.tsx",
                    lineNumber: 872,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-card rounded-2xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-foreground mb-4",
                        children: "リンク統計"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                        lineNumber: 915,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-4 gap-4",
                        children: initialLinkCategories.map((cat)=>{
                            const Icon = cat.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-xl bg-primary/10 border border-primary/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                            lineNumber: 922,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                        lineNumber: 921,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-foreground",
                                                children: cat.links.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                                lineNumber: 925,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: cat.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                                lineNumber: 926,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                        lineNumber: 924,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, cat.id, true, {
                                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                                lineNumber: 920,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/links-page.tsx",
                        lineNumber: 916,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/links-page.tsx",
                lineNumber: 914,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/links-page.tsx",
        lineNumber: 815,
        columnNumber: 5
    }, this);
}
_s1(LinksPage, "SulEwOjYUKlNCin/pIbvauOnaME=");
_c1 = LinksPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "LinkCard");
__turbopack_context__.k.register(_c1, "LinksPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/sns-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SNSPage",
    ()=>SNSPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/line-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/stacked-bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2d$with$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/donut-chart-with-legend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/scrollable-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const formatDiff = (num)=>{
    if (num > 0) return `+${num.toLocaleString()}`;
    if (num < 0) return num.toLocaleString();
    return '0';
};
function XIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
            lineNumber: 22,
            columnNumber: 132
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
        lineNumber: 22,
        columnNumber: 65
    }, this);
}
_c = XIcon;
function InstagramIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
            lineNumber: 23,
            columnNumber: 140
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
        lineNumber: 23,
        columnNumber: 73
    }, this);
}
_c1 = InstagramIcon;
function NoteIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2v-4h2v4zm0-6h-2V9h2v2z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
            lineNumber: 24,
            columnNumber: 135
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
        lineNumber: 24,
        columnNumber: 68
    }, this);
}
_c2 = NoteIcon;
function SNSPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterMode, setFilterMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [monthlyFilterMode, setMonthlyFilterMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('total');
    const [weeklyFilterMode, setWeeklyFilterMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('total');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SNSPage.useEffect": ()=>{
            const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRoX91AuTR9uVSNcCSqr0ir_SIP-6ZtNpOqBHaLEwXDMA99w1Rws-5L7crTpqBY_JqHa-n0Ie4PxWLq/pub?gid=0&single=true&output=csv';
            fetch(csvUrl).then({
                "SNSPage.useEffect": (response)=>response.text()
            }["SNSPage.useEffect"]).then({
                "SNSPage.useEffect": (csvText)=>{
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                        skipEmptyLines: true
                    });
                    const rawData = parsed.data;
                    const headerRowIndex = rawData.findIndex({
                        "SNSPage.useEffect.headerRowIndex": (row)=>row.includes('Instagram')
                    }["SNSPage.useEffect.headerRowIndex"]);
                    if (headerRowIndex === -1) return;
                    const headers = rawData[headerRowIndex];
                    const monthIdx = headers.indexOf('月');
                    const dayIdx = headers.indexOf('日');
                    let xIdx = headers.indexOf('X');
                    if (xIdx === -1) xIdx = headers.indexOf('x');
                    const instaIdx = headers.indexOf('Instagram');
                    const noteIdx = headers.indexOf('note');
                    const dailyRecords = rawData.slice(headerRowIndex + 1).map({
                        "SNSPage.useEffect.dailyRecords": (row)=>({
                                date: `${row[monthIdx]}/${row[dayIdx]}`,
                                x: Number(row[xIdx]) || 0,
                                instagram: Number(row[instaIdx]) || 0,
                                note: Number(row[noteIdx]) || 0
                            })
                    }["SNSPage.useEffect.dailyRecords"]).filter({
                        "SNSPage.useEffect.dailyRecords": (record)=>record.x > 0 || record.instagram > 0 || record.note > 0
                    }["SNSPage.useEffect.dailyRecords"]);
                    if (dailyRecords.length === 0) return;
                    const processedRecords = dailyRecords.map({
                        "SNSPage.useEffect.processedRecords": (record, i)=>{
                            const prev = i > 0 ? dailyRecords[i - 1] : record;
                            return {
                                ...record,
                                incX: record.x - prev.x,
                                incInsta: record.instagram - prev.instagram,
                                incNote: record.note - prev.note,
                                total: record.x + record.instagram + record.note
                            };
                        }
                    }["SNSPage.useEffect.processedRecords"]);
                    const nowJst = new Date(new Date().toLocaleString('en-US', {
                        timeZone: 'Asia/Tokyo'
                    }));
                    const currentY = nowJst.getFullYear();
                    const currentM = nowJst.getMonth() + 1;
                    const currentD = nowJst.getDate();
                    const todayNum = currentY * 10000 + currentM * 100 + currentD;
                    const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
                    const endOfPrevMonthJst = new Date(nowJst.getTime());
                    endOfPrevMonthJst.setDate(0);
                    const endOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + endOfPrevMonthJst.getDate();
                    const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
                    const startOfWeekJst = new Date(nowJst.getTime());
                    startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
                    const startOfWeekNum = startOfWeekJst.getFullYear() * 10000 + (startOfWeekJst.getMonth() + 1) * 100 + startOfWeekJst.getDate();
                    const endOfPrevWeekJst = new Date(startOfWeekJst.getTime());
                    endOfPrevWeekJst.setDate(startOfWeekJst.getDate() - 1);
                    const endOfPrevWeekNum = endOfPrevWeekJst.getFullYear() * 10000 + (endOfPrevWeekJst.getMonth() + 1) * 100 + endOfPrevWeekJst.getDate();
                    let currentYearForDate = currentY;
                    if (dailyRecords.length > 0 && parseInt(dailyRecords[0].date.split('/')[0], 10) > currentM + 1) currentYearForDate--;
                    let prevMonthForDate = -1;
                    const recordsWithDateNum = processedRecords.map({
                        "SNSPage.useEffect.recordsWithDateNum": (record)=>{
                            const [mStr, dStr] = record.date.split('/');
                            const m = parseInt(mStr, 10);
                            const d = parseInt(dStr, 10);
                            if (prevMonthForDate !== -1 && prevMonthForDate === 12 && m === 1) currentYearForDate++;
                            prevMonthForDate = m;
                            return {
                                ...record,
                                recordNum: currentYearForDate * 10000 + m * 100 + d
                            };
                        }
                    }["SNSPage.useEffect.recordsWithDateNum"]);
                    const calculateMetrics = {
                        "SNSPage.useEffect.calculateMetrics": (key)=>{
                            let thisMonthInc = 0, thisWeekInc = 0, todayInc = 0;
                            let endOfPrevMonthVal = recordsWithDateNum[0][key] || 0;
                            let endOfPrevWeekVal = recordsWithDateNum[0][key] || 0;
                            recordsWithDateNum.forEach({
                                "SNSPage.useEffect.calculateMetrics": (record)=>{
                                    const num = record.recordNum;
                                    const incKey = key === 'x' ? 'incX' : key === 'instagram' ? 'incInsta' : 'incNote';
                                    if (num >= startOfThisMonthNum) thisMonthInc += record[incKey];
                                    if (num <= endOfPrevMonthNum) endOfPrevMonthVal = record[key];
                                    if (num >= startOfWeekNum) thisWeekInc += record[incKey];
                                    if (num <= endOfPrevWeekNum) endOfPrevWeekVal = record[key];
                                    if (num === todayNum) todayInc += record[incKey];
                                }
                            }["SNSPage.useEffect.calculateMetrics"]);
                            const latest = recordsWithDateNum[recordsWithDateNum.length - 1][key];
                            return {
                                followers: latest,
                                todayIncrease: todayInc,
                                weeklyIncrease: thisWeekInc,
                                weeklyRate: endOfPrevWeekVal === 0 ? 100 : Math.round(latest / endOfPrevWeekVal * 100),
                                monthlyIncrease: thisMonthInc,
                                monthlyRate: endOfPrevMonthVal === 0 ? 100 : Math.round(latest / endOfPrevMonthVal * 100)
                            };
                        }
                    }["SNSPage.useEffect.calculateMetrics"];
                    const latestRecord = dailyRecords[dailyRecords.length - 1];
                    const monthlyMap = new Map();
                    processedRecords.forEach({
                        "SNSPage.useEffect": (record)=>{
                            const monthLabel = record.date.split('/')[0] + '月';
                            if (!monthlyMap.has(monthLabel)) monthlyMap.set(monthLabel, {
                                x: 0,
                                instagram: 0,
                                note: 0,
                                total: 0
                            });
                            const cur = monthlyMap.get(monthLabel);
                            cur.x += record.incX;
                            cur.instagram += record.incInsta;
                            cur.note += record.incNote;
                            cur.total += record.incX + record.incInsta + record.incNote;
                        }
                    }["SNSPage.useEffect"]);
                    const monthlyTableRaw = Array.from(monthlyMap.entries()).map({
                        "SNSPage.useEffect.monthlyTableRaw": ([month, val])=>({
                                month,
                                x: val.x,
                                instagram: val.instagram,
                                note: val.note,
                                total: val.total
                            })
                    }["SNSPage.useEffect.monthlyTableRaw"]);
                    const monthlyTable = [
                        ...monthlyTableRaw
                    ].reverse();
                    const monthlyByPlatform = [
                        ...monthlyTableRaw
                    ].slice(-4).map({
                        "SNSPage.useEffect.monthlyByPlatform": (item)=>({
                                name: item.month,
                                X: item.x,
                                Instagram: item.instagram,
                                note: item.note
                            })
                    }["SNSPage.useEffect.monthlyByPlatform"]);
                    const weeklyMap = new Map();
                    let currentYear = nowJst.getFullYear();
                    if (processedRecords.length > 0 && parseInt(processedRecords[0].date.split('/')[0], 10) > nowJst.getMonth() + 2) currentYear--;
                    let prevMonth = -1;
                    processedRecords.forEach({
                        "SNSPage.useEffect": (record)=>{
                            const [mStr, dStr] = record.date.split('/');
                            const m = parseInt(mStr, 10);
                            const d = parseInt(dStr, 10);
                            if (prevMonth !== -1 && prevMonth === 12 && m === 1) currentYear++;
                            prevMonth = m;
                            const dateObj = new Date(currentYear, m - 1, d);
                            const dayOfWeek = dateObj.getDay() === 0 ? 7 : dateObj.getDay();
                            const endOfWeek = new Date(dateObj.getTime());
                            endOfWeek.setDate(dateObj.getDate() + (7 - dayOfWeek));
                            const startOfWeek = new Date(endOfWeek.getTime());
                            startOfWeek.setDate(endOfWeek.getDate() - 6);
                            const weekKey = `${endOfWeek.getFullYear()}-${endOfWeek.getMonth() + 1}-${endOfWeek.getDate()}`;
                            if (!weeklyMap.has(weekKey)) {
                                weeklyMap.set(weekKey, {
                                    x: 0,
                                    instagram: 0,
                                    note: 0,
                                    total: 0,
                                    startStr: `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()}`,
                                    endStr: `${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}`
                                });
                            }
                            const weekData = weeklyMap.get(weekKey);
                            weekData.x += record.incX;
                            weekData.instagram += record.incInsta;
                            weekData.note += record.incNote;
                            weekData.total += record.incX + record.incInsta + record.incNote;
                        }
                    }["SNSPage.useEffect"]);
                    const weeklyTableRaw = Array.from(weeklyMap.values()).map({
                        "SNSPage.useEffect.weeklyTableRaw": (data)=>{
                            const endMonth = parseInt(data.endStr.split('/')[0], 10);
                            const endDay = parseInt(data.endStr.split('/')[1], 10);
                            const weekNum = Math.ceil(endDay / 7);
                            return {
                                week: `${endMonth}月第${weekNum}週 (${data.startStr}-${data.endStr})`,
                                shortWeek: `${endMonth}月第${weekNum}週`,
                                x: data.x,
                                instagram: data.instagram,
                                note: data.note,
                                total: data.total
                            };
                        }
                    }["SNSPage.useEffect.weeklyTableRaw"]);
                    const weeklyTable = [
                        ...weeklyTableRaw
                    ].reverse();
                    const weeklyByPlatform = [
                        ...weeklyTableRaw
                    ].slice(-4).map({
                        "SNSPage.useEffect.weeklyByPlatform": (item)=>({
                                name: item.shortWeek,
                                X: item.x,
                                Instagram: item.instagram,
                                note: item.note
                            })
                    }["SNSPage.useEffect.weeklyByPlatform"]);
                    setData({
                        platforms: {
                            x: calculateMetrics('x'),
                            instagram: calculateMetrics('instagram'),
                            note: calculateMetrics('note')
                        },
                        charts: {
                            followersTrend: dailyRecords.map({
                                "SNSPage.useEffect": (record)=>({
                                        name: record.date,
                                        X: record.x,
                                        Instagram: record.instagram,
                                        note: record.note,
                                        総数: record.x + record.instagram + record.note
                                    })
                            }["SNSPage.useEffect"]),
                            monthlyByPlatform,
                            weeklyByPlatform,
                            platformDistribution: [
                                {
                                    name: 'X',
                                    value: latestRecord.x,
                                    color: '#1DA1F2'
                                },
                                {
                                    name: 'Instagram',
                                    value: latestRecord.instagram,
                                    color: '#d640e4'
                                },
                                {
                                    name: 'note',
                                    value: latestRecord.note,
                                    color: '#41C9B4'
                                }
                            ].filter({
                                "SNSPage.useEffect": (item)=>item.value > 0
                            }["SNSPage.useEffect"])
                        },
                        tables: {
                            monthlyTable,
                            weeklyTable
                        }
                    });
                }
            }["SNSPage.useEffect"]).catch({
                "SNSPage.useEffect": (err)=>console.error('CSV Fetch Error:', err)
            }["SNSPage.useEffect"]);
        }
    }["SNSPage.useEffect"], []);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                    lineNumber: 189,
                    columnNumber: 159
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "スプレッドシートからSNSデータを読み込み中..."
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                    lineNumber: 189,
                    columnNumber: 193
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
            lineNumber: 189,
            columnNumber: 104
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
        lineNumber: 189,
        columnNumber: 22
    }, this);
    const { platforms, charts, tables } = data;
    const getTrendLines = ()=>{
        switch(filterMode){
            case 'x':
                return [
                    {
                        dataKey: 'X',
                        color: '#1DA1F2',
                        name: 'X'
                    }
                ];
            case 'instagram':
                return [
                    {
                        dataKey: 'Instagram',
                        color: '#d640e4',
                        name: 'Instagram'
                    }
                ];
            case 'note':
                return [
                    {
                        dataKey: 'note',
                        color: '#41C9B4',
                        name: 'note'
                    }
                ];
            default:
                return [
                    {
                        dataKey: '総数',
                        color: '#F59E0B',
                        name: '総数'
                    },
                    {
                        dataKey: 'X',
                        color: '#1DA1F2',
                        name: 'X'
                    },
                    {
                        dataKey: 'Instagram',
                        color: '#d640e4',
                        name: 'Instagram'
                    },
                    {
                        dataKey: 'note',
                        color: '#41C9B4',
                        name: 'note'
                    }
                ];
        }
    };
    const getMonthlyBars = ()=>{
        switch(monthlyFilterMode){
            case 'x':
                return [
                    {
                        dataKey: 'X',
                        name: 'X',
                        color: '#1DA1F2'
                    }
                ];
            case 'instagram':
                return [
                    {
                        dataKey: 'Instagram',
                        name: 'Instagram',
                        color: '#d640e4'
                    }
                ];
            case 'note':
                return [
                    {
                        dataKey: 'note',
                        name: 'note',
                        color: '#41C9B4'
                    }
                ];
            default:
                return [
                    {
                        dataKey: 'X',
                        name: 'X',
                        color: '#1DA1F2'
                    },
                    {
                        dataKey: 'Instagram',
                        name: 'Instagram',
                        color: '#d640e4'
                    },
                    {
                        dataKey: 'note',
                        name: 'note',
                        color: '#41C9B4'
                    }
                ];
        }
    };
    const getWeeklyBars = ()=>{
        switch(weeklyFilterMode){
            case 'x':
                return [
                    {
                        dataKey: 'X',
                        name: 'X',
                        color: '#1DA1F2'
                    }
                ];
            case 'instagram':
                return [
                    {
                        dataKey: 'Instagram',
                        name: 'Instagram',
                        color: '#d640e4'
                    }
                ];
            case 'note':
                return [
                    {
                        dataKey: 'note',
                        name: 'note',
                        color: '#41C9B4'
                    }
                ];
            default:
                return [
                    {
                        dataKey: 'X',
                        name: 'X',
                        color: '#1DA1F2'
                    },
                    {
                        dataKey: 'Instagram',
                        name: 'Instagram',
                        color: '#d640e4'
                    },
                    {
                        dataKey: 'note',
                        name: 'note',
                        color: '#41C9B4'
                    }
                ];
        }
    };
    const chartFilterButtons = [
        {
            mode: 'total',
            label: '総数',
            color: 'bg-[#F59E0B]'
        },
        {
            mode: 'x',
            label: 'X',
            color: 'bg-[#1DA1F2]'
        },
        {
            mode: 'instagram',
            label: 'Instagram',
            color: 'bg-[#d640e4]'
        },
        {
            mode: 'note',
            label: 'note',
            color: 'bg-[#41C9B4]'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.4
        },
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "SNS分析"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 225,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "X、Instagram、noteのフォロワー数と増加推移を確認できます"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 225,
                                columnNumber: 75
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1DVcnAj75n_Hokt74Q-SX_FI_J5PSbJiOzhvwJfHggFM/edit?gid=0#gid=0",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.1
                        },
                        className: "glass-card rounded-2xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-xl bg-[#1DA1F2]/10 border border-[#1DA1F2]/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                            className: "h-5 w-5 text-[#1DA1F2]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 134
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: "X (Twitter)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 184
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "フォロワー数",
                                        value: platforms.x.followers.toLocaleString(),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                        accentColor: "primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "今月の増加数",
                                        value: formatDiff(platforms.x.monthlyIncrease),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                        accentColor: "success"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "1カ月比",
                                        value: platforms.x.monthlyRate,
                                        unit: "%",
                                        trendValue: "先月末比",
                                        trendType: "up",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                        accentColor: "primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "今週の増加数",
                                        value: formatDiff(platforms.x.weeklyIncrease),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                        accentColor: "success"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "週間比",
                                        value: platforms.x.weeklyRate,
                                        unit: "%",
                                        trendValue: "先週末比",
                                        trendType: "up",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                        accentColor: "accent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "今日の増加数",
                                        value: formatDiff(platforms.x.todayIncrease),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                        accentColor: "warning"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.2
                        },
                        className: "glass-card rounded-2xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-xl bg-[#d640e4]/10 border border-[#d640e4]/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramIcon, {
                                            className: "h-5 w-5 text-[#d640e4]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 134
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: "Instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 192
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "フォロワー数",
                                        value: platforms.instagram.followers.toLocaleString(),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                        accentColor: "danger"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "今月の増加数",
                                        value: formatDiff(platforms.instagram.monthlyIncrease),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                        accentColor: "success"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "1カ月比",
                                        value: platforms.instagram.monthlyRate,
                                        unit: "%",
                                        trendValue: "先月末比",
                                        trendType: "up",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                        accentColor: "primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "今週の増加数",
                                        value: formatDiff(platforms.instagram.weeklyIncrease),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                        accentColor: "success"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "週間比",
                                        value: platforms.instagram.weeklyRate,
                                        unit: "%",
                                        trendValue: "先週末比",
                                        trendType: "up",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                        accentColor: "accent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "今日の増加数",
                                        value: formatDiff(platforms.instagram.todayIncrease),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                        accentColor: "warning"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.3
                        },
                        className: "glass-card rounded-2xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-xl bg-[#41C9B4]/10 border border-[#41C9B4]/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoteIcon, {
                                            className: "h-5 w-5 text-[#41C9B4]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 134
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: "note"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 187
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "フォロワー数",
                                        value: platforms.note.followers.toLocaleString(),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                        accentColor: "success"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "今月の増加数",
                                        value: formatDiff(platforms.note.monthlyIncrease),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                        accentColor: "success"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "1カ月比",
                                        value: platforms.note.monthlyRate,
                                        unit: "%",
                                        trendValue: "先月末比",
                                        trendType: "up",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                        accentColor: "primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "今週の増加数",
                                        value: formatDiff(platforms.note.weeklyIncrease),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                        accentColor: "success"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "週間比",
                                        value: platforms.note.weeklyRate,
                                        unit: "%",
                                        trendValue: "先週末比",
                                        trendType: "up",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                        accentColor: "accent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                                        title: "今日の増加数",
                                        value: formatDiff(platforms.note.todayIncrease),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                        accentColor: "warning"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "SNSフォロワー推移",
                description: "フォロワー数推移（媒体別切替可能）",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-4",
                        children: [
                            {
                                mode: 'all',
                                label: '全媒体',
                                color: 'bg-primary'
                            },
                            {
                                mode: 'x',
                                label: 'Xのみ',
                                color: 'bg-[#1DA1F2]'
                            },
                            {
                                mode: 'instagram',
                                label: 'Instagramのみ',
                                color: 'bg-[#d640e4]'
                            },
                            {
                                mode: 'note',
                                label: 'noteのみ',
                                color: 'bg-[#41C9B4]'
                            }
                        ].map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>setFilterMode(btn.mode),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('transition-all duration-200', filterMode === btn.mode ? `${btn.color} text-white border-transparent` : 'bg-secondary/30 hover:bg-secondary/50 border-border/50'),
                                children: btn.label
                            }, btn.mode, false, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[350px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartComponent"], {
                            data: charts.followersTrend.slice(-90),
                            lines: getTrendLines()
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                            lineNumber: 289,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月別増加数",
                        description: "直近4ヶ月のSNS別増加数",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-4",
                                children: chartFilterButtons.map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>setMonthlyFilterMode(btn.mode),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('transition-all duration-200', monthlyFilterMode === btn.mode ? `${btn.color} text-white border-transparent` : 'bg-secondary/30 hover:bg-secondary/50 border-border/50'),
                                        children: btn.label
                                    }, btn.mode, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 47
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[300px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                    data: charts.monthlyByPlatform,
                                    bars: getMonthlyBars()
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "週別増加数",
                        description: "直近4週間のSNS別増加数 (月〜日)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-4",
                                children: chartFilterButtons.map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>setWeeklyFilterMode(btn.mode),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('transition-all duration-200', weeklyFilterMode === btn.mode ? `${btn.color} text-white border-transparent` : 'bg-secondary/30 hover:bg-secondary/50 border-border/50'),
                                        children: btn.label
                                    }, btn.mode, false, {
                                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 47
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[300px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                    data: charts.weeklyByPlatform,
                                    bars: getWeeklyBars()
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月別増加数テーブル",
                        description: "SNS別の月間増加数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: 'month',
                                    label: '月',
                                    align: 'left'
                                },
                                {
                                    key: 'x',
                                    label: 'X',
                                    align: 'right'
                                },
                                {
                                    key: 'instagram',
                                    label: 'Instagram',
                                    align: 'right'
                                },
                                {
                                    key: 'note',
                                    label: 'note',
                                    align: 'right'
                                },
                                {
                                    key: 'total',
                                    label: '合計',
                                    align: 'right'
                                }
                            ],
                            data: tables.monthlyTable.map((row)=>({
                                    ...row,
                                    x: formatDiff(row.x),
                                    instagram: formatDiff(row.instagram),
                                    note: formatDiff(row.note),
                                    total: formatDiff(row.total)
                                }))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "週別増加数テーブル",
                        description: "SNS別の週間増加数 (月〜日)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: 'week',
                                    label: '週 (月〜日)',
                                    align: 'left'
                                },
                                {
                                    key: 'x',
                                    label: 'X',
                                    align: 'right'
                                },
                                {
                                    key: 'instagram',
                                    label: 'Instagram',
                                    align: 'right'
                                },
                                {
                                    key: 'note',
                                    label: 'note',
                                    align: 'right'
                                },
                                {
                                    key: 'total',
                                    label: '合計',
                                    align: 'right'
                                }
                            ],
                            data: tables.weeklyTable.map((row)=>({
                                    ...row,
                                    x: formatDiff(row.x),
                                    instagram: formatDiff(row.instagram),
                                    note: formatDiff(row.note),
                                    total: formatDiff(row.total)
                                }))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "媒体別フォロワー割合",
                description: "各SNSのフォロワー数構成比",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[350px]",
                    children: charts.platformDistribution.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2d$with$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChartWithLegend"], {
                        data: charts.platformDistribution,
                        centerLabel: "フォロワー"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 318,
                        columnNumber: 54
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full items-center justify-center text-muted-foreground",
                        children: "データがありません"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                        lineNumber: 318,
                        columnNumber: 138
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/sns-page.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/sns-page.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_s(SNSPage, "HSB/j1Dh7+HS1ql4Ytdgtf4o0XU=");
_c3 = SNSPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "XIcon");
__turbopack_context__.k.register(_c1, "InstagramIcon");
__turbopack_context__.k.register(_c2, "NoteIcon");
__turbopack_context__.k.register(_c3, "SNSPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/cbhp-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CBHPPage",
    ()=>CBHPPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/chart-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/line-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/donut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/scrollable-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/stacked-bar-chart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const CSV_URLS = {
    trend: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=0&single=true&output=csv",
    source: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=1328843602&single=true&output=csv",
    pages: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=242868570&single=true&output=csv",
    region: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=472061508&single=true&output=csv",
    conversions: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=16174631&single=true&output=csv",
    demographics: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=160182027&single=true&output=csv"
};
const SOURCE_COLORS = [
    "#38BDF8",
    "#8B5CF6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
    "#10B981",
    "#6B7280"
];
const REGION_COLORS = [
    "#38BDF8",
    "#8B5CF6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#6B7280"
];
const getJSTDate = ()=>new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tokyo"
    }));
const formatSeconds = (sec)=>{
    if (!sec || isNaN(sec)) return "0秒";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m > 0 ? `${m}分${s}秒` : `${s}秒`;
};
const classifySource = (sourceMedium)=>{
    const sm = sourceMedium.toLowerCase();
    if (sm.includes("google") || sm.includes("yahoo") || sm.includes("bing")) return "自然検索 (Google等)";
    if (sm.includes("t.co") || sm.includes("twitter") || sm.includes("x.com")) return "X (Twitter)";
    if (sm.includes("instagram")) return "Instagram";
    if (sm.includes("note.com")) return "note";
    if (sm.includes("direct")) return "直接アクセス (Direct)";
    return "外部サイト・その他";
};
const translateRegion = (enRegion)=>{
    const map = {
        Hokkaido: "北海道",
        Aomori: "青森県",
        Iwate: "岩手県",
        Miyagi: "宮城県",
        Akita: "秋田県",
        Yamagata: "山形県",
        Fukushima: "福島県",
        Ibaraki: "茨城県",
        Tochigi: "栃木県",
        Gunma: "群馬県",
        Saitama: "埼玉県",
        Chiba: "千葉県",
        Tokyo: "東京都",
        Kanagawa: "神奈川県",
        Niigata: "新潟県",
        Toyama: "富山県",
        Ishikawa: "石川県",
        Fukui: "福井県",
        Yamanashi: "山梨県",
        Nagano: "長野県",
        Gifu: "岐阜県",
        Shizuoka: "静岡県",
        Aichi: "愛知県",
        Mie: "三重県",
        Shiga: "滋賀県",
        Kyoto: "京都府",
        Osaka: "大阪府",
        Hyogo: "兵庫県",
        Nara: "奈良県",
        Wakayama: "和歌山県",
        Tottori: "鳥取県",
        Shimane: "島根県",
        Okayama: "岡山県",
        Hiroshima: "広島県",
        Yamaguchi: "山口県",
        Tokushima: "徳島県",
        Kagawa: "香川県",
        Ehime: "愛媛県",
        Kochi: "高知県",
        Fukuoka: "福岡県",
        Saga: "佐賀県",
        Nagasaki: "長崎県",
        Kumamoto: "熊本県",
        Oita: "大分県",
        Miyazaki: "宮崎県",
        Kagoshima: "鹿児島県",
        Okinawa: "沖縄県"
    };
    if (!enRegion || enRegion === "(not set)") return "不明";
    let cleanName = enRegion.replace(/ Prefecture$/, "").replace(/-to$/, "").replace(/-fu$/, "").replace(/-ken$/, "").trim();
    return map[cleanName] || enRegion;
};
function CBHPPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortMode, setSortMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("views_desc");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CBHPPage.useEffect": ()=>{
            Promise.all([
                fetch(CSV_URLS.trend).then({
                    "CBHPPage.useEffect": (res)=>res.text()
                }["CBHPPage.useEffect"]),
                fetch(CSV_URLS.source).then({
                    "CBHPPage.useEffect": (res)=>res.text()
                }["CBHPPage.useEffect"]),
                fetch(CSV_URLS.pages).then({
                    "CBHPPage.useEffect": (res)=>res.text()
                }["CBHPPage.useEffect"]),
                fetch(CSV_URLS.region).then({
                    "CBHPPage.useEffect": (res)=>res.text()
                }["CBHPPage.useEffect"]),
                fetch(CSV_URLS.conversions).then({
                    "CBHPPage.useEffect": (res)=>res.text()
                }["CBHPPage.useEffect"]),
                fetch(CSV_URLS.demographics).then({
                    "CBHPPage.useEffect": (res)=>res.text()
                }["CBHPPage.useEffect"])
            ]).then({
                "CBHPPage.useEffect": ([trendTxt, sourceTxt, pagesTxt, regionTxt, convTxt, demoTxt])=>{
                    const nowJst = getJSTDate();
                    const currentY = nowJst.getFullYear();
                    const currentM = nowJst.getMonth() + 1;
                    const currentD = nowJst.getDate();
                    const todayNum = currentY * 10000 + currentM * 100 + currentD;
                    const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
                    const endOfPrevMonthJst = new Date(nowJst.getTime());
                    endOfPrevMonthJst.setDate(0);
                    const endOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + endOfPrevMonthJst.getDate();
                    const startOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + 1;
                    const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
                    const startOfWeekJst = new Date(nowJst.getTime());
                    startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
                    const startOfWeekNum = startOfWeekJst.getFullYear() * 10000 + (startOfWeekJst.getMonth() + 1) * 100 + startOfWeekJst.getDate();
                    const endOfPrevWeekJst = new Date(startOfWeekJst.getTime());
                    endOfPrevWeekJst.setDate(startOfWeekJst.getDate() - 1);
                    const endOfPrevWeekNum = endOfPrevWeekJst.getFullYear() * 10000 + (endOfPrevWeekJst.getMonth() + 1) * 100 + endOfPrevWeekJst.getDate();
                    const startOfPrevWeekJst = new Date(endOfPrevWeekJst.getTime());
                    startOfPrevWeekJst.setDate(endOfPrevWeekJst.getDate() - 6);
                    const startOfPrevWeekNum = startOfPrevWeekJst.getFullYear() * 10000 + (startOfPrevWeekJst.getMonth() + 1) * 100 + startOfPrevWeekJst.getDate();
                    const parseDateToNum = {
                        "CBHPPage.useEffect.parseDateToNum": (dateStr)=>{
                            if (!dateStr) return 0;
                            const d = dateStr.replace(/\//g, "");
                            return parseInt(d, 10) || 0;
                        }
                    }["CBHPPage.useEffect.parseDateToNum"];
                    // --- 1. 日別トレンドの処理 ---
                    const trendRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(trendTxt, {
                        header: true,
                        skipEmptyLines: true
                    }).data;
                    let totalPVs = 0, totalUsers = 0, totalNewUsers = 0, sumEngagementRate = 0, sumSessionDuration = 0;
                    const trendData = trendRows.map({
                        "CBHPPage.useEffect.trendData": (row)=>{
                            const pv = parseInt(row.screenPageViews, 10) || 0;
                            const users = parseInt(row.activeUsers, 10) || 0;
                            const newUsers = parseInt(row.newUsers, 10) || 0;
                            totalPVs += pv;
                            totalUsers += users;
                            totalNewUsers += newUsers;
                            sumEngagementRate += parseFloat(row.engagementRate) || 0;
                            sumSessionDuration += parseFloat(row.averageSessionDuration) || 0;
                            const shortDate = String(row.date || "").length > 5 ? String(row.date).substring(5) : row.date;
                            return {
                                name: shortDate,
                                PV数: pv,
                                ユーザー数: users,
                                新規ユーザー: newUsers
                            };
                        }
                    }["CBHPPage.useEffect.trendData"]);
                    const avgEngRate = trendRows.length > 0 ? sumEngagementRate / trendRows.length * 100 : 0;
                    const avgDuration = trendRows.length > 0 ? sumSessionDuration / trendRows.length : 0;
                    // --- 2. 流入元の処理 ---
                    const sourceRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(sourceTxt, {
                        header: true,
                        skipEmptyLines: true
                    }).data;
                    const sourceMap = new Map();
                    sourceRows.forEach({
                        "CBHPPage.useEffect": (row)=>{
                            const sm = String(row.sourceMedium || row.sessionSourceMedium || "");
                            const users = parseInt(row.activeUsers, 10) || 0;
                            const groupName = classifySource(sm);
                            sourceMap.set(groupName, (sourceMap.get(groupName) || 0) + users);
                        }
                    }["CBHPPage.useEffect"]);
                    const sourceData = Array.from(sourceMap.entries()).map({
                        "CBHPPage.useEffect.sourceData": ([name, value], i)=>({
                                name,
                                value,
                                color: SOURCE_COLORS[i % SOURCE_COLORS.length]
                            })
                    }["CBHPPage.useEffect.sourceData"]).sort({
                        "CBHPPage.useEffect.sourceData": (a, b)=>b.value - a.value
                    }["CBHPPage.useEffect.sourceData"]);
                    // --- 3. コンバージョンの処理 (ページごとにDiscord参加を紐づける) ---
                    const convRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(convTxt, {
                        header: true,
                        skipEmptyLines: true
                    }).data;
                    let totalDiscordJoins = 0;
                    const discordJoinsByPage = new Map();
                    convRows.forEach({
                        "CBHPPage.useEffect": (row)=>{
                            const evName = row.eventName || "";
                            const path = row.pagePath || "不明";
                            const count = parseInt(row.eventCount, 10) || 0;
                            if (evName === "discord_join") {
                                totalDiscordJoins += count;
                                discordJoinsByPage.set(path, (discordJoinsByPage.get(path) || 0) + count);
                            }
                        }
                    }["CBHPPage.useEffect"]);
                    // --- 4. ページランキングの処理 (日付比較 ＆ CVR計算) ---
                    const pagesRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(pagesTxt, {
                        header: true,
                        skipEmptyLines: true
                    }).data;
                    const pathMap = new Map();
                    pagesRows.forEach({
                        "CBHPPage.useEffect": (row)=>{
                            const path = row.pagePath || "不明";
                            const views = parseInt(row.screenPageViews, 10) || 0;
                            const shortTitle = String(row.pageTitle || "").split(" - ")[0].split(" | ")[0];
                            const dateNum = parseDateToNum(row.date);
                            if (!pathMap.has(path)) pathMap.set(path, {
                                title: shortTitle || path,
                                path,
                                totalPv: 0,
                                thisMonth: 0,
                                prevMonth: 0,
                                thisWeek: 0,
                                prevWeek: 0
                            });
                            const p = pathMap.get(path);
                            p.totalPv += views;
                            if (dateNum >= startOfThisMonthNum) p.thisMonth += views;
                            else if (dateNum >= startOfPrevMonthNum && dateNum <= endOfPrevMonthNum) p.prevMonth += views;
                            if (dateNum >= startOfWeekNum) p.thisWeek += views;
                            else if (dateNum >= startOfPrevWeekNum && dateNum <= endOfPrevWeekNum) p.prevWeek += views;
                        }
                    }["CBHPPage.useEffect"]);
                    const pageData = Array.from(pathMap.values()).map({
                        "CBHPPage.useEffect.pageData": (item)=>{
                            const discordCount = discordJoinsByPage.get(item.path) || 0;
                            const cvr = item.totalPv > 0 ? discordCount / item.totalPv * 100 : 0;
                            const monthRate = item.prevMonth === 0 ? item.thisMonth > 0 ? 100 : 0 : Math.round(item.thisMonth / item.prevMonth * 100);
                            const weekRate = item.prevWeek === 0 ? item.thisWeek > 0 ? 100 : 0 : Math.round(item.thisWeek / item.prevWeek * 100);
                            return {
                                title: item.title,
                                path: item.path,
                                viewsNum: item.totalPv,
                                discordNum: discordCount,
                                cvrNum: cvr,
                                monthRateStr: item.thisMonth === 0 && item.prevMonth === 0 ? "-" : `${monthRate}%`,
                                weekRateStr: item.thisWeek === 0 && item.prevWeek === 0 ? "-" : `${weekRate}%`,
                                cvrStr: cvr > 0 ? `${Math.round(cvr * 10) / 10}%` : "0%",
                                monthTrend: monthRate >= 100 ? "up" : "down",
                                weekTrend: weekRate >= 100 ? "up" : "down"
                            };
                        }
                    }["CBHPPage.useEffect.pageData"]);
                    // --- 5. 都道府県の処理 ---
                    const regionRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(regionTxt, {
                        header: true,
                        skipEmptyLines: true
                    }).data;
                    const regionDistribution = [];
                    const regionData = [];
                    const regionMap = new Map();
                    regionRows.forEach({
                        "CBHPPage.useEffect": (row)=>{
                            const val = parseInt(row.activeUsers, 10) || 0;
                            const rawRegion = String(row.region || "");
                            if (val <= 0 || !rawRegion || rawRegion === "(not set)") return;
                            const jpRegion = translateRegion(rawRegion);
                            regionMap.set(jpRegion, (regionMap.get(jpRegion) || 0) + val);
                        }
                    }["CBHPPage.useEffect"]);
                    const sortedRegions = Array.from(regionMap.entries()).sort({
                        "CBHPPage.useEffect.sortedRegions": (a, b)=>b[1] - a[1]
                    }["CBHPPage.useEffect.sortedRegions"]);
                    sortedRegions.forEach({
                        "CBHPPage.useEffect": ([regionName, val], i)=>{
                            regionData.push({
                                rank: i + 1,
                                region: regionName,
                                users: val.toLocaleString()
                            });
                            if (i < 5) regionDistribution.push({
                                name: regionName,
                                value: val,
                                color: REGION_COLORS[i % REGION_COLORS.length]
                            });
                            else {
                                const othersIdx = regionDistribution.findIndex({
                                    "CBHPPage.useEffect.othersIdx": (d)=>d.name === "その他"
                                }["CBHPPage.useEffect.othersIdx"]);
                                if (othersIdx === -1) regionDistribution.push({
                                    name: "その他",
                                    value: val,
                                    color: REGION_COLORS[5]
                                });
                                else regionDistribution[othersIdx].value += val;
                            }
                        }
                    }["CBHPPage.useEffect"]);
                    // --- 6. 性別・年齢層の処理 ---
                    const demoRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(demoTxt, {
                        header: true,
                        skipEmptyLines: true
                    }).data;
                    const genderMap = new Map();
                    const ageMap = new Map();
                    demoRows.forEach({
                        "CBHPPage.useEffect": (row)=>{
                            const gender = String(row.userGender || "unknown");
                            const age = String(row.userAgeBracket || "unknown");
                            const users = parseInt(row.activeUsers, 10) || 0;
                            if (users <= 0) return;
                            // 日本語に変換
                            const jpGender = gender === "male" ? "男性" : gender === "female" ? "女性" : "不明";
                            const jpAge = age === "unknown" ? "不明" : age;
                            genderMap.set(jpGender, (genderMap.get(jpGender) || 0) + users);
                            ageMap.set(jpAge, (ageMap.get(jpAge) || 0) + users);
                        }
                    }["CBHPPage.useEffect"]);
                    // 性別の円グラフ用データ
                    const genderData = Array.from(genderMap.entries()).map({
                        "CBHPPage.useEffect.genderData": ([name, value], i)=>({
                                name,
                                value,
                                // 男性は水色、女性はピンク、不明はグレー
                                color: name === "男性" ? "#38BDF8" : name === "女性" ? "#EC4899" : "#6B7280"
                            })
                    }["CBHPPage.useEffect.genderData"]).sort({
                        "CBHPPage.useEffect.genderData": (a, b)=>b.value - a.value
                    }["CBHPPage.useEffect.genderData"]);
                    // 年齢の棒グラフ用データ
                    const ageDataForChart = Array.from(ageMap.entries()).map({
                        "CBHPPage.useEffect.ageDataForChart": ([name, value])=>({
                                name: name,
                                ユーザー数: value
                            })
                    }["CBHPPage.useEffect.ageDataForChart"])// 年齢順にソート（不明は最後に）
                    .sort({
                        "CBHPPage.useEffect.ageDataForChart": (a, b)=>{
                            if (a.name === "不明") return 1;
                            if (b.name === "不明") return -1;
                            return a.name.localeCompare(b.name);
                        }
                    }["CBHPPage.useEffect.ageDataForChart"]);
                    setData({
                        summary: {
                            totalPVs,
                            totalUsers,
                            totalNewUsers,
                            avgEngRate: avgEngRate.toFixed(1),
                            avgDuration: formatSeconds(avgDuration),
                            totalDiscordJoins
                        },
                        charts: {
                            trendData,
                            sourceData,
                            regionDistribution,
                            genderData,
                            ageDataForChart
                        },
                        tables: {
                            pageDataRaw: pageData,
                            regionData
                        }
                    });
                }
            }["CBHPPage.useEffect"]).catch({
                "CBHPPage.useEffect": (err)=>{
                    console.error("GA4 CSV Fetch Error:", err);
                    setError("データの読み込みに失敗しました。");
                }
            }["CBHPPage.useEffect"]);
        }
    }["CBHPPage.useEffect"], []);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-destructive",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: error
        }, void 0, false, {
            fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
            lineNumber: 467,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
        lineNumber: 466,
        columnNumber: 7
    }, this);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                    lineNumber: 474,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "GA4アクセスデータを取得・集計中..."
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                    lineNumber: 475,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
            lineNumber: 473,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
        lineNumber: 472,
        columnNumber: 7
    }, this);
    const { summary, charts, tables } = data;
    const sortedPageData = [
        ...tables.pageDataRaw
    ].sort((a, b)=>{
        if (sortMode === "discord_desc") return b.discordNum - a.discordNum;
        if (sortMode === "cvr_desc") return b.cvrNum - a.cvrNum;
        return b.viewsNum - a.viewsNum;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        .recharts-default-tooltip { background-color: rgba(15, 23, 42, 0.95) !important; border: 1px solid rgba(255,255,255,0.1) !important; }
        .recharts-tooltip-item-name, .recharts-tooltip-item-value, .recharts-tooltip-item { color: #ffffff !important; }
      `
                }
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-foreground",
                        children: "CBHP アクセス解析 (GA4)"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "ウェブサイトのアクセス状況・エンゲージメント・流入経路・コンバージョンを確認できます。"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1QwgyndR230Vtr2qiWAgw0FNQEaCfdA1VYagoRE2rxOQ/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                    lineNumber: 518,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "総ページビュー (累計)",
                        value: summary.totalPVs.toLocaleString(),
                        unit: "PV",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "のべユーザー数 (累計)",
                        value: summary.totalUsers.toLocaleString(),
                        unit: "人",
                        trendValue: `うち新規: ${summary.totalNewUsers.toLocaleString()}人`,
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "平均エンゲージメント率",
                        value: summary.avgEngRate,
                        unit: "%",
                        trendValue: `平均滞在時間: ${summary.avgDuration}`,
                        trendType: "up",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
                        accentColor: "warning"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 540,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "Discord参加クリック数 (累計)",
                        value: summary.totalDiscordJoins.toLocaleString(),
                        unit: "回",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
                        accentColor: "info"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                lineNumber: 523,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "アクセス推移 (全期間)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                    height: "h-[350px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartComponent"], {
                        data: charts.trendData,
                        lines: [
                            {
                                dataKey: "PV数",
                                name: "PV数",
                                color: "#38BDF8"
                            },
                            {
                                dataKey: "ユーザー数",
                                name: "ユーザー数",
                                color: "#8B5CF6"
                            },
                            {
                                dataKey: "新規ユーザー",
                                name: "新規ユーザー",
                                color: "#22C55E"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 560,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                    lineNumber: 559,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                title: "ページ別 パフォーマンス分析",
                description: "各ページのPV数、Discord参加への貢献度（CVR）、およびアクセス増減率",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-end gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground mr-1",
                                children: "並び順:"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this),
                            [
                                {
                                    mode: "views_desc",
                                    label: "PV数順"
                                },
                                {
                                    mode: "discord_desc",
                                    label: "参加クリック数順"
                                },
                                {
                                    mode: "cvr_desc",
                                    label: "CVR (コンバージョン率) 順"
                                }
                            ].map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>setSortMode(btn.mode),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200", sortMode === btn.mode ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                            className: "h-3 w-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                            lineNumber: 598,
                                            columnNumber: 15
                                        }, this),
                                        btn.label
                                    ]
                                }, btn.mode, true, {
                                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                        columns: [
                            {
                                key: "rank",
                                label: "順位",
                                align: "center"
                            },
                            {
                                key: "title",
                                label: "ページ名",
                                align: "left"
                            },
                            {
                                key: "viewsStr",
                                label: "PV数",
                                align: "right"
                            },
                            {
                                key: "monthRateStr",
                                label: "前月比",
                                align: "right"
                            },
                            {
                                key: "weekRateStr",
                                label: "前週比",
                                align: "right"
                            },
                            {
                                key: "discordStr",
                                label: "Discord参加",
                                align: "right"
                            },
                            {
                                key: "cvrComp",
                                label: "CVR",
                                align: "right"
                            }
                        ],
                        data: sortedPageData.map((item, i)=>({
                                ...item,
                                rank: i + 1,
                                viewsStr: item.viewsNum.toLocaleString(),
                                discordStr: item.discordNum > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-info font-bold",
                                    children: [
                                        item.discordNum,
                                        "回"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                    lineNumber: 619,
                                    columnNumber: 17
                                }, this) : "-",
                                cvrComp: item.cvrNum > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-warning font-bold",
                                    children: item.cvrStr
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 17
                                }, this) : "-",
                                monthRateStr: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: item.monthTrend === "up" ? "text-success" : "text-danger",
                                    children: item.monthRateStr
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                    lineNumber: 630,
                                    columnNumber: 15
                                }, this),
                                weekRateStr: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: item.weekTrend === "up" ? "text-success" : "text-danger",
                                    children: item.weekRateStr
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                    lineNumber: 639,
                                    columnNumber: 15
                                }, this)
                            }))
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "流入元メディア 割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[350px]",
                            children: charts.sourceData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.sourceData,
                                centerLabel: "ユーザー"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                lineNumber: 655,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                lineNumber: 657,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                            lineNumber: 653,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 652,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "都道府県別 アクセス割合",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[350px]",
                            children: charts.regionDistribution.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.regionDistribution,
                                centerLabel: "ユーザー"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                lineNumber: 666,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                lineNumber: 671,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                            lineNumber: 664,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 663,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "地域(都道府県) ランキング (累計)",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                            columns: [
                                {
                                    key: "rank",
                                    label: "順位",
                                    align: "center"
                                },
                                {
                                    key: "region",
                                    label: "都道府県",
                                    align: "left"
                                },
                                {
                                    key: "users",
                                    label: "ユーザー数",
                                    align: "right"
                                }
                            ],
                            data: tables.regionData
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                            lineNumber: 678,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                lineNumber: 651,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "性別 割合",
                        description: "アクセスユーザーの性別分布",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: charts.genderData && charts.genderData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.genderData,
                                centerLabel: "ユーザー"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                lineNumber: 692,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                lineNumber: 694,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                            lineNumber: 690,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 689,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "年齢層 分布",
                        description: "アクセスユーザーの年齢層別割合",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: charts.ageDataForChart && charts.ageDataForChart.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                data: charts.ageDataForChart,
                                bars: [
                                    {
                                        dataKey: "ユーザー数",
                                        name: "ユーザー数",
                                        color: "#8B5CF6"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                lineNumber: 702,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                                lineNumber: 707,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                            lineNumber: 700,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                        lineNumber: 699,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
                lineNumber: 688,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/cbhp-page.tsx",
        lineNumber: 489,
        columnNumber: 5
    }, this);
}
_s(CBHPPage, "QYM3tLPNVWX2X3qmhp9sPv45NFM=");
_c = CBHPPage;
var _c;
__turbopack_context__.k.register(_c, "CBHPPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/pages/shittoku-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShittokuPage",
    ()=>ShittokuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/chart-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/line-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/stacked-bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/charts/donut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/scrollable-table.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function ShittokuPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShittokuPage.useEffect": ()=>{
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLLj6DB0iMVlhvHqUbfQhAhE7JEl5cps2zkE-WG-P2Vr-YiJWhdaOqO2QCzsXR-fjKFV1P44-0n7l3/pub?gid=0&single=true&output=csv";
            fetch(csvUrl).then({
                "ShittokuPage.useEffect": (response)=>response.text()
            }["ShittokuPage.useEffect"]).then({
                "ShittokuPage.useEffect": (csvText)=>{
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                        skipEmptyLines: true
                    });
                    const rawData = parsed.data;
                    // "id"という列名がある行（1行目）を探す
                    const headerIdx = rawData.findIndex({
                        "ShittokuPage.useEffect.headerIdx": (row)=>row[0] === "id"
                    }["ShittokuPage.useEffect.headerIdx"]);
                    if (headerIdx === -1) return;
                    // ヘッダー行とサブヘッダー行（1〜2行）を飛ばしてデータ行を取得
                    const dataRows = rawData.slice(headerIdx + 2);
                    const events = [];
                    let totalParticipants = 0;
                    let totalSatSum = 0;
                    let totalSatResponses = 0;
                    const formatCounts = new Map();
                    const monthlyAgg = new Map();
                    const cumulativeTrend = [];
                    dataRows.forEach({
                        "ShittokuPage.useEffect": (row)=>{
                            const dateStr = String(row[1] || "").trim();
                            const nameStr = String(row[2] || "").trim();
                            const formatStr = String(row[4] || "未分類").trim();
                            const participantsStr = String(row[21] || "").trim();
                            // 開催日が空、または参加者数が空（未開催）の行は除外
                            if (!dateStr || participantsStr === "") return;
                            const participants = parseInt(participantsStr, 10) || 0;
                            const s5 = parseInt(row[22], 10) || 0;
                            const s4 = parseInt(row[23], 10) || 0;
                            const s3 = parseInt(row[24], 10) || 0;
                            const s2 = parseInt(row[25], 10) || 0;
                            const s1 = parseInt(row[26], 10) || 0;
                            const satTotalResponses = s5 + s4 + s3 + s2 + s1;
                            const satSum = s5 * 5 + s4 * 4 + s3 * 3 + s2 * 2 + s1 * 1;
                            const avgSat = satTotalResponses > 0 ? satSum / satTotalResponses : null;
                            // 月ラベルの生成
                            let monthLabel = "";
                            const dateObj = new Date(dateStr);
                            if (isNaN(dateObj.getTime())) {
                                monthLabel = dateStr.slice(0, 7).replace("-", "年") + "月";
                            } else {
                                const y = dateObj.getFullYear();
                                const m = dateObj.getMonth() + 1;
                                monthLabel = `${y}年${m}月`;
                            }
                            events.push({
                                date: dateStr,
                                name: nameStr,
                                monthLabel,
                                format: formatStr,
                                participants,
                                satTotalResponses,
                                satSum,
                                avgSat
                            });
                            // 全体集計
                            totalParticipants += participants;
                            totalSatSum += satSum;
                            totalSatResponses += satTotalResponses;
                            // 形式別集計
                            if (formatStr) {
                                formatCounts.set(formatStr, (formatCounts.get(formatStr) || 0) + 1);
                            }
                            // 月別集計
                            if (!monthlyAgg.has(monthLabel)) {
                                monthlyAgg.set(monthLabel, {
                                    events: 0,
                                    participants: 0,
                                    satSum: 0,
                                    satResponses: 0
                                });
                            }
                            const mData = monthlyAgg.get(monthLabel);
                            mData.events += 1;
                            mData.participants += participants;
                            mData.satSum += satSum;
                            mData.satResponses += satTotalResponses;
                            // 累計推移
                            cumulativeTrend.push({
                                name: dateStr,
                                累計参加者数: totalParticipants
                            });
                        }
                    }["ShittokuPage.useEffect"]);
                    // 月別チャート用データの生成
                    const monthlyParticipantsData = [];
                    const monthlyAvgParticipantsData = [];
                    const monthlyAvgSatData = [];
                    monthlyAgg.forEach({
                        "ShittokuPage.useEffect": (val, key)=>{
                            monthlyParticipantsData.push({
                                name: key,
                                参加者数: val.participants
                            });
                            monthlyAvgParticipantsData.push({
                                name: key,
                                平均参加者数: Math.round(val.participants / val.events * 10) / 10
                            });
                            monthlyAvgSatData.push({
                                name: key,
                                平均満足度: val.satResponses > 0 ? Math.round(val.satSum / val.satResponses * 100) / 100 : 0
                            });
                        }
                    }["ShittokuPage.useEffect"]);
                    const monthlyTable = Array.from(monthlyAgg.entries()).map({
                        "ShittokuPage.useEffect.monthlyTable": ([month, val])=>({
                                month,
                                events: val.events,
                                participants: val.participants.toLocaleString(),
                                avgParticipants: Math.round(val.participants / val.events * 10) / 10,
                                avgSat: val.satResponses > 0 ? (Math.round(val.satSum / val.satResponses * 100) / 100).toFixed(2) : "-"
                            })
                    }["ShittokuPage.useEffect.monthlyTable"]).reverse();
                    // 形式別円グラフ用データ
                    const typeColors = [
                        "#38BDF8",
                        "#8B5CF6",
                        "#22C55E",
                        "#F59E0B",
                        "#EF4444",
                        "#EC4899",
                        "#10B981"
                    ];
                    const formatDistribution = Array.from(formatCounts.entries()).map({
                        "ShittokuPage.useEffect.formatDistribution": ([name, value], i)=>({
                                name,
                                value,
                                color: typeColors[i % typeColors.length]
                            })
                    }["ShittokuPage.useEffect.formatDistribution"]).sort({
                        "ShittokuPage.useEffect.formatDistribution": (a, b)=>b.value - a.value
                    }["ShittokuPage.useEffect.formatDistribution"]);
                    // 各種KPIの計算
                    const lastEvent = events.length > 0 ? events[events.length - 1] : null;
                    const lastParticipants = lastEvent ? lastEvent.participants : 0;
                    const lastAvgSat = lastEvent && lastEvent.avgSat !== null ? Math.round(lastEvent.avgSat * 100) / 100 : "-";
                    const lastEventDate = lastEvent ? lastEvent.date : "";
                    const avgParticipants = events.length > 0 ? Math.round(totalParticipants / events.length * 10) / 10 : 0;
                    const avgSatOverall = totalSatResponses > 0 ? Math.round(totalSatSum / totalSatResponses * 100) / 100 : "-";
                    setData({
                        summary: {
                            totalParticipants,
                            totalEvents: events.length,
                            avgParticipants,
                            avgSatOverall,
                            lastParticipants,
                            lastAvgSat,
                            lastEventDate
                        },
                        charts: {
                            cumulativeTrend,
                            monthlyParticipantsData,
                            monthlyAvgParticipantsData,
                            monthlyAvgSatData,
                            formatDistribution
                        },
                        tables: {
                            monthlyTable
                        }
                    });
                }
            }["ShittokuPage.useEffect"]).catch({
                "ShittokuPage.useEffect": (err)=>console.error("CSV Fetch Error:", err)
            }["ShittokuPage.useEffect"]);
        }
    }["ShittokuPage.useEffect"], []);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[400px] items-center justify-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                    lineNumber: 192,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "イベントデータを集計中..."
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
            lineNumber: 191,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
        lineNumber: 190,
        columnNumber: 7
    }, this);
    const { summary, charts, tables } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "宇宙知っトク 分析"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "イベントの参加者数推移、形式別の傾向、満足度の変化を確認できます。"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        className: "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/spreadsheets/d/1Clqn3sHYbpthvFKzb2XAaQ8RLHwWSOYxgkvm4HxoJp0/edit",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "元データ (スプシ)"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "累計参加者数",
                        value: summary.totalParticipants.toLocaleString(),
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        accentColor: "primary"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "開催数",
                        value: summary.totalEvents.toLocaleString(),
                        unit: "回",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                        accentColor: "accent"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "全体平均参加者数",
                        value: summary.avgParticipants,
                        unit: "人/回",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        accentColor: "success"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "全体平均満足度",
                        value: summary.avgSatOverall,
                        unit: "",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "warning"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "前回の参加者数",
                        value: summary.lastParticipants,
                        unit: "人",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"],
                        accentColor: "primary",
                        description: summary.lastEventDate ? `${summary.lastEventDate} 開催` : ""
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        title: "前回の平均満足度",
                        value: summary.lastAvgSat,
                        unit: "",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        accentColor: "warning",
                        description: summary.lastEventDate ? `${summary.lastEventDate} 開催` : ""
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "累計参加者数の推移",
                        description: "各イベント開催ごとの参加者合計の推移",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[350px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartComponent"], {
                                data: charts.cumulativeTrend,
                                lines: [
                                    {
                                        dataKey: "累計参加者数",
                                        name: "累計参加者数",
                                        color: "#38BDF8"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月別 参加者数",
                        description: "月間の合計参加人数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[350px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$stacked$2d$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackedBarChart"], {
                                data: charts.monthlyParticipantsData,
                                bars: [
                                    {
                                        dataKey: "参加者数",
                                        name: "参加者数",
                                        color: "#8B5CF6"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月別 平均参加者数の推移",
                        description: "1イベントあたりの平均人数",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartComponent"], {
                                data: charts.monthlyAvgParticipantsData,
                                lines: [
                                    {
                                        dataKey: "平均参加者数",
                                        name: "平均参加者数",
                                        color: "#22C55E"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "月別 平均満足度の推移",
                        description: "月間の平均満足度 (5段階)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$line$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartComponent"], {
                                data: charts.monthlyAvgSatData,
                                lines: [
                                    {
                                        dataKey: "平均満足度",
                                        name: "平均満足度",
                                        color: "#F59E0B"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                        title: "イベント形式別 割合",
                        description: "開催されたイベントの形式の分布",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$chart$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                            height: "h-[300px]",
                            children: charts.formatDistribution.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$charts$2f$donut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DonutChart"], {
                                data: charts.formatDistribution,
                                centerLabel: "開催数"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                lineNumber: 321,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-muted-foreground",
                                children: "データがありません"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                                lineNumber: 323,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionCard"], {
                    title: "月別 集計データ一覧",
                    description: "各月の開催数、参加者数、平均満足度の詳細データ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$scrollable$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableTable"], {
                        columns: [
                            {
                                key: "month",
                                label: "月",
                                align: "left"
                            },
                            {
                                key: "events",
                                label: "開催数",
                                align: "right"
                            },
                            {
                                key: "participants",
                                label: "合計参加者数",
                                align: "right"
                            },
                            {
                                key: "avgParticipants",
                                label: "平均参加者数",
                                align: "right"
                            },
                            {
                                key: "avgSat",
                                label: "平均満足度",
                                align: "right"
                            }
                        ],
                        data: tables.monthlyTable
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/pages/shittoku-page.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_s(ShittokuPage, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c = ShittokuPage;
var _c;
__turbopack_context__.k.register(_c, "ShittokuPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_dashboard_pages_0rxr59n._.js.map