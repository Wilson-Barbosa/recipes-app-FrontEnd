import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {

    @Input() wasRegistrationSuccessfull: boolean = false;

    @Output() closeModalEvent = new EventEmitter<boolean>();

    // Upon closing the modal sends a 
    ngOnDestroy(): void {
        this.closeModalEvent.emit(false);
    }


}
