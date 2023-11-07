import { MdStorefront } from "react-icons/md";
import { RiShirtFill } from 'react-icons/ri';
import { GiPoloShirt } from 'react-icons/gi';
import { GiTrousers } from 'react-icons/gi'; // Import an icon for "Quan Nam"
import { GiAmpleDress } from 'react-icons/gi'; // Import an icon for "Vay"
import { GiSleevelessJacket } from 'react-icons/gi'; // Import an icon for "Ao Khoat"
import { AiOutlineSmallDash } from 'react-icons/ai'; 

export const categories = [
  {
    label: 'All',
    icon: MdStorefront,
  },
  {
    label: 'Ao Nam',
    icon: RiShirtFill,
  },
  {
    label: 'Ao Nu',
    icon: GiPoloShirt,
  },
  {
    label: 'Quan Nam',
    icon: GiTrousers,
  },
  {
    label: 'Vay',
    icon: GiAmpleDress,
  },
  {
    label: 'Ao Khoat',
    icon: GiSleevelessJacket,
  },
  {
    label: 'Phu kien',
    icon: AiOutlineSmallDash, // Icon for "Phu kien"
  },
];
