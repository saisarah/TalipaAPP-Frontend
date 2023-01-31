import dataEncryptionImg from '../images/data_encryption.png'

export default function Forum() {
  return (
    <div className="m-auto justify-center p-6 text-center">
      <img className="m-auto" src={dataEncryptionImg} />
      <h1>This group is Private</h1>
      <small>Join this group to view or participate in forum.</small>
    </div>
  );
}
