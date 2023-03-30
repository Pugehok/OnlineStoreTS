import { useForm, SubmitHandler } from 'react-hook-form';
import { formValues } from '../../types/item';

interface IModal {
  handlerStatus: () => void;
}

export const ModalComponent = (props: IModal) => {
  const { handlerStatus } = props;
  const { register, handleSubmit } = useForm<formValues>();
  const onSubmit: SubmitHandler<formValues> = async (data) => {
    let response = await fetch('/article/fetch/post/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ ...data }),
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20%',
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '40px',
          justifyContent: 'space-around',
        }}
      >
        <a onClick={() => handlerStatus()}>Вернуться назад</a>
        <input
          style={{ marginBottom: '20px' }}
          placeholder="Введите ваше имя"
          {...register('firstName')}
        />
        <input
          style={{ marginBottom: '20px' }}
          placeholder="Введите вашу фамилию"
          {...register('lastName')}
        />
        <input
          style={{ marginBottom: '20px' }}
          placeholder="Введите ваш номер телефона"
          {...register('numberphone')}
        />
        <input
          style={{ marginBottom: '20px' }}
          placeholder="Введише ваш адресс"
          {...register('adress')}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
