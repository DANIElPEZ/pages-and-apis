export function sanitizeInput(name, comment) {
     const sanitizeName = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
     const sanitizeComment = /^[\p{L}\p{Emoji_Presentation}\p{Emoji}\s]+$/u;

     const isValidName = sanitizeName.test(name.trim());
     const isValidComment = sanitizeComment.test(comment.trim());

     return {
          name: isValidName,
          comment: isValidComment
     };
}
