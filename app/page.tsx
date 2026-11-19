import { AuthGate } from '@/components/auth-gate';
import { Dashboard } from '@/components/dashboard/dashboard';

export default function Page() {
  return (
    <AuthGate>
      <Dashboard />
    </AuthGate>
  );
}
