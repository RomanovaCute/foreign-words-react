import styled from 'styled-components'

const ItemsList = styled.ul`
    display: grid;
    grid-template-columns: 15% 15% 15% 15% 30%;
    padding: 0;
    column-gap: 5px;
    font-family: 'Vag world bold';
    color: #04064f;
`

function HeaderList(){
    return(
        <ItemsList>
            <li className='header-item'>Word</li>
            <li className='header-item'>Translation</li>
            <li className='header-item'>Transcription</li>
            <li className='header-item'>Сategory</li>
            <li className='header-item'></li>
        </ItemsList>
    )
}

export default HeaderList;