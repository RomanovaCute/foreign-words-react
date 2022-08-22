import styled from 'styled-components'

const ItemsList = styled.ul`
    display: grid;
    grid-template-columns: 15% 15% 15% 15% 30%;
    padding: 0;
    column-gap: 5px;
`

function HeaderList(){
    return(
    <div className='list-header'>
        <ItemsList>
            <li className='header-item'>Word</li>
            <li className='header-item'>Translation</li>
            <li className='header-item'>Transcription</li>
            <li className='header-item'>Сategory</li>
            <li className='header-item'></li>
        </ItemsList>
    </div>
    )
}

export default HeaderList;