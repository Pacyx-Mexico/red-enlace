export const nameRegEx = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

export const emailRegEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const telRegEx = /^\d{7,14}$/;

export const cpRegEx = /^\d{5}(?:[-\s]\d{4})?$/;

export const rfcRegEx =
  /^([a-zñA-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z]|[0-9]){2}([aA]|[0-9]){1})?$/;
