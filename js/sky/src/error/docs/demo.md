---
name: Error
icon: exclamation-circle
summary: The error component provides a template that allows other components to display error messages when errors occur.
---

The error directive provides a template that allows other components to display error messages when errors occur. The parent `bb-error` directive can contain multiple directives, and each one is optional.

### Error Settings
  - `bb-error` &mdash; Wraps the error message in a SKY UX-themed container.
    - `bb-error-image` &mdash; Specifies an image to display in the error message.
    - `bb-error-title` &mdash; Specifies a title to display in the error message.
    - `bb-error-description` &mdash; Specifies a description to provide additional details in the error message.
    - `bb-error-action` &mdash; Specifies an action to include in the error message. For example, you can include a button to reload the page or to refresh data.

In addition to the directive, the error component includes a service that can display simple error messages in a modal window.

### Error Modal Settings

 - `bbErrorModal` &mdash; The service to inject in order to display an error message in a modal window.
   - `show(options)` &mdash; The function to call to display the error modal.  The `options` parameter supports the following properties:
     - `errorTitle` &mdash; Specifies a title to display in the error message.
     - `errorDescription` &mdash; Specifies a description to provide additional details in the error message.
