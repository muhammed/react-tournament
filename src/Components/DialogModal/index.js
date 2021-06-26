import React from 'react'
import useDialog from '@/Hooks/useDialog'
import styles from './dialogModal.module.scss'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const DialogModal = () => {
  const { dialogOpened, hideDialog, dialogOptions } = useDialog()

  if (!dialogOpened || !dialogOptions) return <div />

  const { title, description, buttonApply, buttonCancel } = dialogOptions

  return (
    <Modal
      isOpen={dialogOpened}
      className={styles.modal}
      overlayClassName={styles.overlay}
      onRequestClose={hideDialog}>
      <div className={styles.head}>{title}</div>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: description }}></div>
      <div className={styles.footer}>
        {buttonCancel && (
          <button className={styles.cancel} onClick={buttonCancel.onPress}>
            {buttonCancel.title}
          </button>
        )}
        {buttonApply && (
          <button className={styles.confirm} onClick={buttonApply.onPress}>
            {buttonApply.title}
          </button>
        )}
      </div>
    </Modal>
  )
}

export default DialogModal
