import editIcon from '../../assets/editIcon.png';

function Edit(){
    return(
        <div className='cursor-pointer hover:bg-indigo-600 rounded transition-colors duration-200 p-1'>
            <img src={editIcon} alt="Edit Icon" className="w-7 h-auto p-1" />
        </div>
    )
}

export default Edit