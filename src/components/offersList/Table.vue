<template>
  <div>
    <div class="categories">
      <div class="category-item">
        Управление технологическим процессом
      </div>
      <div class="category-item">
        Дополнительные сервисы
      </div>
      <div class="category-item">
        Цифровое управление компанией
      </div>
      <div class="category-item">
        Комплексная система информационной безопасности
      </div>

    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" max-height="450">
        <el-table-column fixed prop="date" label="Date">
        </el-table-column>
        <el-table-column prop="name" label="Name">
        </el-table-column>
        <el-table-column prop="state" label="State">
        </el-table-column>
        <el-table-column prop="city" label="City">
        </el-table-column>
        <el-table-column prop="address" label="Address">
        </el-table-column>
        <el-table-column prop="zip" label="Zip"> </el-table-column>
        <el-table-column fixed="right" label="Operations">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              Remove
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
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
        }]
      }
    }
  }
</script>

<style>
  .categories {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    min-width: 100%;
    overflow: auto;
    margin-bottom: 20px;
    padding: 20px;
  }

  .category-item {
    color: #005B9C;
    background-color: #FFFFFF;
    padding: 20px;
    box-shadow: 0px 4px 15px rgba(0, 91, 156, 0.12);
    border-radius: 5px;
    margin-right: 10px;
    text-align: center;
  }
</style>