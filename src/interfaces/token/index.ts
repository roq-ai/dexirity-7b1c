import { TransactionInterface } from 'interfaces/transaction';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TokenInterface {
  id?: string;
  name: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  transaction?: TransactionInterface[];
  organization?: OrganizationInterface;
  _count?: {
    transaction?: number;
  };
}

export interface TokenGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
