import Link from 'next/link';
import { Col, Row } from './base';
import 'twin.macro';

const Header: React.FC = () => {
    return (
        <Row tw="justify-center items-center">
            <Link href="/">
                <p tw="text-white text-5xl md:text-7xl font-serif font-[600] drop-shadow-[3px 3px 5px black]">
                    Hi, I'm Ryan.
                </p>
            </Link>
        </Row>
    )
}

export default Header;


