export interface AlertDto {
  id: string;
  type: AlertType;
  message: string;
}

export type AlertType = 'success' | 'warning' | 'info' | 'error';
