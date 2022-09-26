import {
    List,
    Pagination as RaPagination,
    PaginationActions as RaPaginationActions,
} from 'react-admin';

export const PaginationActions = props => (
    <RaPaginationActions
        {...props}
        // these props are passed down to the MUI <Pagination> component
        color="primary"
        showFirstButton
        showLastButton
    />
);

export const Pagination = props => <RaPagination rowsPerPageOptions={[2, 3, 5, 10, 20]}  {...props} ActionsComponent={PaginationActions} />;