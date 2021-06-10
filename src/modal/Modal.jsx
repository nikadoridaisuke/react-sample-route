import "./Modal.css"

export const Modal = (props) => {
  const { showModal, setShowModal } = props;
  console.log(showModal);

  const onClickClose = () => {
    setShowModal(false)
  }
  if (showModal) {
    return (
      <div>
        <div id="overlay">
          <div id="content">
            <p>modalテスト</p>
            <button onClick={() => {onClickClose()}}>close</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}