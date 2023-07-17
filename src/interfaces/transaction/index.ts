import { TokenInterface } from 'interfaces/token';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  amount: number;
  token_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  token?: TokenInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  token_id?: string;
  user_id?: string;
}
