import { BaseItemDto } from '@jellyfin/sdk/lib/generated-client/models'

export interface AddToPlaylistMutation {
	track?: BaseItemDto
	playlist: BaseItemDto
}
