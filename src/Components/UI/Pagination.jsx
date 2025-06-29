import React from 'react';

const Pagination = ({ children, className = '', ...props }) => {
  return (
    <nav className={className} {...props}>
      <ul className="pagination">
        {children}
      </ul>
    </nav>
  );
};

const PaginationItem = ({ children, active = false, disabled = false, className = '', ...props }) => {
  const itemClasses = `page-item ${active ? 'active' : ''} ${disabled ? 'disabled' : ''} ${className}`;
  
  return (
    <li className={itemClasses} {...props}>
      {children}
    </li>
  );
};

const PaginationLink = ({ children, className = '', ...props }) => {
  return (
    <a className={`page-link ${className}`} {...props}>
      {children}
    </a>
  );
};

Pagination.Item = PaginationItem;
Pagination.First = ({ ...props }) => (
  <PaginationItem {...props}>
    <PaginationLink>First</PaginationLink>
  </PaginationItem>
);
Pagination.Prev = ({ ...props }) => (
  <PaginationItem {...props}>
    <PaginationLink>Previous</PaginationLink>
  </PaginationItem>
);
Pagination.Next = ({ ...props }) => (
  <PaginationItem {...props}>
    <PaginationLink>Next</PaginationLink>
  </PaginationItem>
);
Pagination.Last = ({ ...props }) => (
  <PaginationItem {...props}>
    <PaginationLink>Last</PaginationLink>
  </PaginationItem>
);
Pagination.Ellipsis = ({ ...props }) => (
  <PaginationItem {...props}>
    <PaginationLink>...</PaginationLink>
  </PaginationItem>
);

export default Pagination;