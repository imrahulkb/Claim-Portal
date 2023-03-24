<script>
    import { Modal, ModalBody } from "sveltestrap"
    export let show;
    export let onDeleteClick;
    export let onCloseClick;
</script>
<Modal size="sm" isOpen={show} toggle={onCloseClick} centered={true}>
    <div class="modal-content">
      <ModalBody class="px-4 py-5 text-center">
        <button type="button" on:click={onDeleteClick} class="btn-close position-absolute end-0 top-0 m-3"></button>
        <div class="avatar-sm mb-4 mx-auto">
          <div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
            <i class="mdi mdi-trash-can-outline"></i>
          </div>
        </div>
        <p class="text-muted font-size-16 mb-4">Are you sure you want to permanently erase the job.</p>

        <div class="hstack gap-2 justify-content-center mb-0">
          <button type="button" class="btn btn-danger" on:click={onDeleteClick}>Delete Now</button>
          <button type="button" class="btn btn-secondary" on:click={onCloseClick}>Close</button>
        </div>
      </ModalBody>
    </div>
</Modal>