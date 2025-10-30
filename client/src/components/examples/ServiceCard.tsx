import ServiceCard from '../ServiceCard';
import { FileText } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        icon={FileText}
        title="Bookkeeping"
        items={[
          "Transaction capturing",
          "Bank/account reconciliation",
          "Month-end reporting"
        ]}
      />
    </div>
  );
}
