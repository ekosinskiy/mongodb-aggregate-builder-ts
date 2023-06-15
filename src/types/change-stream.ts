export interface ChangeStreamInterface {
    allChangesForCluster?: boolean;
    fullDocument?: string;
    fullDocumentBeforeChange?: string;
    resumeAfter?: number;
    showExpandedEvents?: boolean;
    startAfter?: any;
    startAtOperationTime?: any;
}
