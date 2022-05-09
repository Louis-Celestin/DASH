export interface Sondage {
    id:          number;
    description: string;
    IdUser:      number;
    created_at:  Date;
    updated_at:  Date;
    deleted_at:  null;
    user:        User;
}
export interface User {
    id:   number;
    name: string;
}