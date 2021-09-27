export default function parseError(error) {
  let errorMessage;

  switch (error.status) {
    case 400:
      errorMessage = 'Одно из полей заполнено неверно';
      break;
    case 401:
      errorMessage = 'Неправильные email или пароль';
      break;
    case 403:
      errorMessage = 'Нет доступа к запрашиваемому ресурсу';
      break;
    case 404:
      errorMessage = 'Запрашиваемый ресурс не найден';
      break;
    case 409:
      errorMessage = 'Такой email уже зарегистрирован';
      break;
    default:
      errorMessage = 'Что-то пошло не так. Повторите попытку позже';
  }

  return errorMessage;
}
