const searchConfig = {
  labelWidth: '80px',
  formItems: [
    {
      type: 'input',
      label: '部门名称',
      prop: 'name',
      placeholder: '请输入部门名称'
    },
    {
      type: 'input',
      label: '部门领导',
      prop: 'leader',
      placeholder: '请输入部门领导'
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt',
      placeholder: '请选择创建时间'
    }
  ]
}

export default searchConfig
