import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open')  isOpen = false;

    @HostListener('click') manageRecipeToggle() {
        this.isOpen = !this.isOpen;
    }

}