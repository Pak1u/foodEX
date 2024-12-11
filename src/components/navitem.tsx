import Link from "next/link";

interface navItemsProps { 
    text : string;
    href : string;
    active : boolean;
}
 const NavItem : React.FC<navItemsProps> = ({ text,href,active}) => {
    return(
        <Link href = {href} className = {`navitem ${active ? 'active' : ''}`}>
                {text}  
        </Link>
    );
};

export default NavItem;