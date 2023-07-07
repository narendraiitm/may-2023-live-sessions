export default {
  template: `<div style='color:green'>
    <slot name='header'> Fallback content for header </slot>
    <slot> Fallback content for default slot </slot>
    <slot name='footer'> Fallback content for footer </slot>
    </div>`,
}
