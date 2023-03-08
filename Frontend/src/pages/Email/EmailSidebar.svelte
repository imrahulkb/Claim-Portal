<script>
	import { Link } from 'svelte-routing';
	import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Form } from 'sveltestrap';

	let open = false;
	const toggle = () => (open = !open);
	
	import CKEditor from 'ckeditor5-svelte';
	import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor';

	// Setting up editor prop to be sent to wrapper component
	let editor = DecoupledEditor;
	// Reference to initialised editor instance
	let editorInstance = null;
	// Setting up any initial data for the editor
	let editorData = '';

	// If needed, custom editor config can be passed through to the component
	// Uncomment the custom editor config if you need to customise the editor.
	// Note: If you don't pass toolbar object then Document editor will use default set of toolbar items.
	let editorConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'fontfamily',
				'fontsize',
				'|',
				'alignment',
				'|',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'strikethrough',
				'underline',
				'subscript',
				'superscript',
				'|',
				'link',
				'|',
				'outdent',
				'indent',
				'|',
				'bulletedList',
				'numberedList',
				'todoList',
				'|',
				'code',
				'codeBlock',
				'|',
				'insertTable',
				'|',
				'uploadImage',
				'blockQuote',
				'|',
				'undo',
				'redo',
			],
			viewportTopOffset: 30,
			shouldNotGroupWhenFull: true,
		},
	};

	function onReady({ detail: editor }) {
		// Insert the toolbar before the editable area.
		editorInstance = editor;
		editor.ui
			.getEditableElement()
			.parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
	}
</script>

<div class="email-leftbar card">
	<Button color="danger" on:click={toggle} class="btn btn-danger btn-block waves-effect waves-light">Compose</Button>
	<div class="mail-list mt-4">
		<Link to={'#'} class="active"
			><i class="mdi mdi-email-outline me-2" /> Inbox
			<span class="ms-1 float-end">(18)</span></Link
		>
		<Link to={'#'}><i class="mdi mdi-star-outline me-2" />Starred</Link>
		<Link to={'#'}><i class="mdi mdi-diamond-stone me-2" />Important</Link>
		<Link to={'#'}><i class="mdi mdi-file-outline me-2" />Draft</Link>
		<Link to={'#'}><i class="mdi mdi-email-check-outline me-2" />Sent Mail</Link>
		<Link to={'#'}><i class="mdi mdi-trash-can-outline me-2" />Trash</Link>
	</div>

	<h6 class="mt-4">Labels</h6>

	<div class="mail-list mt-1">
		<Link to={'#'}><span class="mdi mdi-arrow-right-drop-circle text-info float-end" />Theme Support</Link>
		<Link to={'#'}><span class="mdi mdi-arrow-right-drop-circle text-warning float-end" />Freelance</Link>
		<Link to={'#'}><span class="mdi mdi-arrow-right-drop-circle text-primary float-end" />Social</Link>
		<Link to={'#'}><span class="mdi mdi-arrow-right-drop-circle text-danger float-end" />Friends</Link>
		<Link to={'#'}><span class="mdi mdi-arrow-right-drop-circle text-success float-end" />Family</Link>
	</div>

	<h6 class="mt-4">Chat</h6>

	<div class="mt-2">
		<Link to="/" class="d-flex">
			<div class="flex-shrink-0 me-3">
				<img class="rounded-circle" src="/assets/images/users/avatar-2.jpg" alt="Generic placeholder image1" height="36" />
			</div>
			<div class="flex-grow-1 chat-user-box">
				<p class="user-title m-0">Scott Median</p>
				<p class="text-muted">Hello</p>
			</div>
		</Link>

		<Link to="/" class="d-flex">
			<div class="flex-shrink-0 me-3">
				<img class="rounded-circle" src="/assets/images/users/avatar-3.jpg" alt="Generic placeholder image2" height="36" />
			</div>
			<div class="flex-grow-1 chat-user-box">
				<p class="user-title m-0">Julian Rosa</p>
				<p class="text-muted">What about our next..</p>
			</div>
		</Link>

		<Link to="/" class="d-flex">
			<div class="flex-shrink-0 me-3">
				<img class="rounded-circle" src="/assets/images/users/avatar-4.jpg" alt="Generic placeholder image3" height="36" />
			</div>
			<div class="flex-grow-1 chat-user-box">
				<p class="user-title m-0">David Medina</p>
				<p class="text-muted">Yeah everything is fine</p>
			</div>
		</Link>

		<Link to="/" class="d-flex">
			<div class="flex-shrink-0 me-3">
				<img class="rounded-circle" src="/assets/images/users/avatar-6.jpg" alt="Generic placeholder image4" height="36" />
			</div>
			<div class="flex-grow-1 chat-user-box">
				<p class="user-title m-0">Jay Baker</p>
				<p class="text-muted">Wow that's great</p>
			</div>
		</Link>

	</div>
</div>

<Modal isOpen={open} {toggle}>
	<div class="modal-content">
		<ModalHeader {toggle}>New Message</ModalHeader>
		<ModalBody>
			<div>
				<div class="mb-3">
					<Input type="email" class="form-control" placeholder="To" />
				</div>

				<div class="mb-3">
					<Input type="text" class="form-control" placeholder="Subject" />
				</div>
				<div class="mb-3">
					<Form method="post">
						<CKEditor bind:editor on:ready={onReady} bind:config={editorConfig} bind:value={editorData} />
					</Form>
				</div>
			</div>
		</ModalBody>
		<ModalFooter>
			<button type="button" class="btn btn-light" on:click={toggle}>Close</button>
			<button type="button" class="btn btn-primary">Send <i class="fab fa-telegram-plane ms-1" /></button>
		</ModalFooter>
	</div>
</Modal>
