<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column v-for="col in columns" :key="col.label" :prop="col.prop" :label="col.label">
      <el-table-column v-show="col.children" v-for="child in col.children" :key="child.label" :prop="child.prop" :label="child.label">
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }],
        columns: [
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Движение предложения >>',
            children: [
              {
                prop: 'date',
                label: 'Регистрационный номер предложения*'
              },
              {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
            ]
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
          {
            prop: 'date',
            label: 'Регистрационный номер предложения*'
          },
        ]
      }
    }
  }
</script>