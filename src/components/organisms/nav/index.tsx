import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Img, StyledNav } from '@atoms';
import { Navigation } from '@molecules';
import logo from '../../../assets/images/Biky_Logo_season.png';

export function Nav() {
  const navigate = useNavigate();
  const [left, setLeft] = useState<number>(0);
  const leftRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (leftRef.current) {
      console.log(leftRef.current.getBoundingClientRect().right);
      setLeft(leftRef.current.getBoundingClientRect().right);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (leftRef.current) {
      setLeft(leftRef.current.getBoundingClientRect().right);
    }
  }, [setLeft]);

  return (
    <StyledNav>
      <div className="wrap">
        <div ref={leftRef}>
          <Img
            src={logo}
            width={152}
            height={74}
            alt="로고"
            onClick={() => navigate('/')}
            margin="0 calc(143px * 0.8) 0 0"
            className="cursor"
          />
        </div>
        <Navigation left={left} />
      </div>
    </StyledNav>
  );
}
