import { JwtPayload, RequestAfterAuthentication } from '../../../types';
import { ListingCreateType, ListingUpdateType } from '../../../models/listings';

export interface CreateListingRequest extends RequestAfterAuthentication {
  body: ListingCreateType;
  tokenData: JwtPayload & { employerId: string };
}

export interface UpdateListingRequest extends RequestAfterAuthentication {
  body: ListingUpdateType;
}

export type GetListingByListingIdRequest = RequestAfterAuthentication;

export interface ApplyToListingRequest extends RequestAfterAuthentication {
  params: {
    listingId: string;
  };
}

export type GetUserApplicationsRequest = RequestAfterAuthentication;
