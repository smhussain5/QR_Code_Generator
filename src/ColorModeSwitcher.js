import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(HiOutlineMoon, HiOutlineSun);

  return (
    <IconButton
      rounded={'sm'}
      height={'2rem'}
      my={'1rem'}
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};