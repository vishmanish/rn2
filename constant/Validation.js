const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
  }
  
  const handleValidEmail = (em) => {
      let validEmail = EmailValidator.validate(em)
    if( validEmail ) {
      setData({
          ...data,
          email: em,
          isValidEmail: true
      });
    } else {
      setData({
          ...data,
          email: em,
          isValidEmail: false
      });
    }
  }
  
  const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
  }
  
  const mobilevalidate = (text) => {
      const reg = /^(?:\+?88|0088)?01[15-9]\d{8}$/;
      if (reg.test(text) === false) {
          setData({
              ...data,
              mobile: '',
              isValidMobile: false
          });
        return false;
      } else {
          setData({
              ...data,
              mobile: text,
              isValidMobile: true
          });
        return true;
      }
    }