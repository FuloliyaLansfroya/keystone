import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  password,
  timestamp,
  checkbox
} from '@keystone-6/core/fields';
import type { Lists } from '.keystone/types';
export const lists: Lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ isIndexed: 'unique', } ),
      email: text({validation: { isRequired: true },}),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),
  consulting: list({
    access: allowAll,
    fields: {
      name: text({  label: '姓名' }),
      email: text({  label: '工作邮箱'}),
      phone: text({  label: '联系电话'}),
      company: text({ label: '公司名称'}),
      job: text({  label: '职务'}),
      industry: text({ label: '行业' }),
      demand: text({  label: '简述你的需求' }),
      model: checkbox({label: '是否同意协议'})
    },
  }),
  Tag: list({
    access: allowAll,
    ui: {
      isHidden: true,
    },
    fields: {
      name: text(),
    },
  }),
};
