export interface RowInterface{
    num: any;
    names: any;
    code: any;
    citizenship: any;
    duration: any;
    type: any;
    status: any;
}

export interface ColumnInterface{
    id: 'hid'| 'num' | 'name' | 'code' | 'citizenship' | 'duration' | 'type' | 'status';
    label: string;
    minWidth?: number;
    width?: number;
    align?: 'left';
    format?: (value: number) => string;
}

export interface DataInterface{
    hid: any,
    num: any,
    name: string;
    code: string;
    citizenship: string;
    duration: string;
    type: string;
    status: string
}