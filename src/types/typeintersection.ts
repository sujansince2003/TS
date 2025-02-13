type employee = {
    fname: string,
    salary: number,
    role: string
}

type manager = {
    fname: string,
    officename: string
}

type companyStaff = employee & manager

const staff: companyStaff =
{
    fname: "suan",
    salary: 1,
    role: "manager",
    officename: "bmc"
}