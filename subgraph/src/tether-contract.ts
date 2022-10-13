import { BigInt } from "@graphprotocol/graph-ts"
import {
  TetherContract,
  Issue,
  Redeem,
  Deprecate,
  Params,
  DestroyedBlackFunds,
  AddedBlackList,
  RemovedBlackList,
  Approval,
  Transfer,
  Pause,
  Unpause
} from "../generated/TetherContract/TetherContract"
import { TransferEntity } from "../generated/schema"

export function handleIssue(event: Issue): void {}

export function handleRedeem(event: Redeem): void {}

export function handleDeprecate(event: Deprecate): void {}

export function handleParams(event: Params): void {}

export function handleDestroyedBlackFunds(event: DestroyedBlackFunds): void {}

export function handleAddedBlackList(event: AddedBlackList): void {}

export function handleRemovedBlackList(event: RemovedBlackList): void {}

export function handleApproval(event: Approval): void {}

export function handleTransfer(event: Transfer): void {
  let entity = TransferEntity.load(event.transaction.from.toHex())

  if(entity) {
    entity.from = event.params.from;
    entity.to = event.params.to;
    entity.amount = event.params.value;

    entity.save();
  }
}

export function handlePause(event: Pause): void {}

export function handleUnpause(event: Unpause): void {}
