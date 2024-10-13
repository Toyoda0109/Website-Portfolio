import { useState, useEffect } from 'react';

export const useAdminIp = () => {
  const [isAdminIp, setIsAdminIp] = useState(false);

  useEffect(() => {
    const checkAdminIp = async () => {
      try {
        const response = await fetch('http://localhost:3002/check-ip');
        const data = await response.json();

        if (data.isAdmin) {
          setIsAdminIp(true);
        } else {
          console.error('管理者IPではありません');
        }
      } catch (error) {
        console.error('IPチェックに失敗しました', error);
      }
    };

    checkAdminIp();
  }, []);

  return isAdminIp;
};
