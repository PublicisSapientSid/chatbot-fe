export interface ChatModel {
  intentName?: string;
  nluIntentConfidence?: NluIntentConfidence;
  alternativeIntents?: AlternativeIntent[];
  slots?: any;
  sessionAttributes?: SessionAttributes;
  message?: string;
  sentimentResponse?: SentimentResponse;
  messageFormat?: string;
  dialogState?: string;
  slotToElicit?: string;
  responseCard?: ResponseCard;
  sessionId?: string;
  botVersion?: string;
}

export interface AlternativeIntent {
  intentName: string;
  nluIntentConfidence?: NluIntentConfidence;
  slots: AlternativeIntentSlots;
}

export interface NluIntentConfidence {
  score: number;
}

export interface AlternativeIntentSlots {
  feeling?: null;
  name?: null;
}

export interface ResponseCard {
  version: string;
  contentType: string;
  genericAttachments: GenericAttachment[];
}

export interface GenericAttachment {
  title: null;
  subTitle: null;
  attachmentLinkUrl: null;
  imageUrl: null;
  buttons: Button[];
}

export interface Button {
  text: string;
  value: string;
}

export interface SentimentResponse {
  sentimentLabel: string;
  sentimentScore: string;
}

export interface SessionAttributes {}

export interface Chat {
  sender: "user" | "maya";
  content: ChatModel;
}

export interface IGlobalStateProps {
  isLoading: boolean;
  toastMessage: string;
  chats: Chat[];
  children: any;
}
