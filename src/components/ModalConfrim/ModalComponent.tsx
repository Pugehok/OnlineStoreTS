interface IModal {
  handlerStatus: () => void;
}

export const ModalComponent = (props: IModal) => {
  const { handlerStatus } = props;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20%',
      }}
    >
      <a onClick={() => handlerStatus()} style={{ marginRight: '20px' }}>
        x
      </a>
      <h1>Подтверждение заказа</h1>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20%' }}>
        <div>
          <p>Ваше имя</p>
          <input type="text" placeholder="Введите ваше имя" />
        </div>
        <div>
          <p>Ваша фамилия</p>
          <input type="text" placeholder="Введите вашу фамилию" />
        </div>
        <div>
          {/* //! Со временм переработаем под карту */}
          <p>Ваш адрес</p>
          <input type="text" placeholder="Введите ваш адрес" />
        </div>
        <div>
          <p>Ваш номер телефона </p>
          <input type="tel" placeholder="Введите ваш номер телефона" />
        </div>
        <button style={{ marginTop: '20px' }}>Подветрдить заказ</button>
      </div>
    </div>
  );
};
