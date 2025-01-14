// 전화번호 인증
export const validateTel = (tel: string) => {
    const telRegex = /^01\d{8,9}$/;
    return telRegex.test(tel);
}

// 생년월일 인증
export const validateBirth = (birth: string) => {
    const birthRegex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
    return birthRegex.test(birth);
}

// 성별 검증
export const validateGender = (gender: string) => {
    return ['1','2','3','4','5','6'].includes(gender);
}

// 이메일 검증
export const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// 비밀번호 검증
export const validatePassword = (password: string) => {
    const passwordRegex = /^[a-zA-Z](?=.*[0-9]).{5,19}$/;
    return passwordRegex.test(password);
}

// 카드 번호 포맷
export const cardFormat = (date: string) => {
    return date.replace(/(.{4})/g, '$1/').slice(0, 19).replace(/\/$/, '');
};

// 전화번호 포맷
export const telFormat = (tel: string) => {
    return tel.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
};

// 전화번호 포맷
export const bizFormat = (bizNum: string) => {
    return bizNum.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
};

// 콤마
export const comma = (price: string) => {
    return price.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};