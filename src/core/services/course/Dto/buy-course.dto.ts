export interface BuyCourseRequest {
  courseId: string;
  email: string;
  amount: number;
}

export interface BuyCourseResponse {
  message: string;
  paymentLink: string;
  paymentFor: string;
  referenceKey: string;
  transactionAmount: string;
}
