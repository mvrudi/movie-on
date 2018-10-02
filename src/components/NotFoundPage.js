import React from 'react';
import {Link} from 'react-router-dom'; 

const NotFoundPage = () => (
    <div>
        404! - <Link to="/" style={{ color: '#F2761E' }}>Voltar para a página inicial</Link>
    </div>
);

export default NotFoundPage;