import deleteIcon from '../../assets/deleteIcon.png';

function Delete({ onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer hover:bg-red-600 rounded transition-colors duration-200 p-1">
      <img src={deleteIcon} alt="Delete Icon" className="w-7 h-auto" />
    </div>
  );
}

export default Delete;
