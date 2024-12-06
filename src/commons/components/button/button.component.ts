import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button [class]="'btn ' + variant" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      .btn {
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
      }
      .primary {
        background-color: #3b82f6;
        color: white;
        border: none;
      }
      .secondary {
        background-color: #e5e7eb;
        color: #374151;
        border: 1px solid #d1d5db;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
}
