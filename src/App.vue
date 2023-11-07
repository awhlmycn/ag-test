<template>
    <div class="container">
        <div class="company_block">
            <h2 class="title">1.  Usmile</h2>
            <div class="content">
                <div class="c_block">
                    <div class="c_title">1)公司概述</div>
                    <table class="c_base_table">
                        <tr>
                            <td>公司简介</td>
                            <td>
                                <p style="line-height: 150%;">
                                    领先的国产“科技x美丽”品牌，目前主营电动牙刷等口腔护理产品，兼具产品力和获客力，敏锐地运用新的流量渠道进行消费者种草，将小家电“消费品化”，设计和销售中国消费者喜爱的创新产品
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>领域</td>
                            <td>消费</td>
                        </tr>
                        <tr>
                            <td>投资时间</td>
                            <td>2019年1月</td>
                        </tr>
                        <tr>
                            <td>投资总额</td>
                            <td>
                                <p>钟鼎五期6,900万</p>
                                <p>五号青蓝600万</p>
                            </td>
                        </tr>
                        <tr>
                            <td>目前持股比例</td>
                            <td>
                                <p>钟鼎五期16.10%</p>
                                <p>五号青蓝1.40%</p>
                            </td>
                        </tr>
                        <tr>
                            <td>董事席位</td>
                            <td>是</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: "App",
  components: {
  },
  setup() {
    
  },
};
</script>

<style>
    .container{
        width: 800px;
        font-family: "华文楷体", "STKaiti", "SimKai", "KaiTi", cursive !important;
    }
    .company_block .title{
        font-size: 14pt;
        font-family: "华文楷体", "STKaiti", "SimKai", "KaiTi", cursive;
    }
    .c_title{
        font-size: 11pt;
        font-family: "华文楷体", "STKaiti", "SimKai", "KaiTi", cursive;
        font-weight: bold;
        margin-bottom: 8px;
    }

    table {
        border-collapse: collapse;
        width: 87.3%;
    }
    .c_base_table th, .c_base_table td {
        border: 2px dotted #000;
        padding: 8px;
        text-align: left;
        vertical-align: top; /* 设置垂直对齐到顶部 */
    }

    /* 第一列 */
    .c_base_table td:first-child {
        background-color: #d9e2f3; /* 设置背景颜色 */
        font-weight: bold; /* 设置字体加粗 */
        width: 20%;
        border-left: 2px dashed #c8c8c8;
        border-right: 2px solid #000;
        box-sizing: border-box;
    }
    td p {
       margin-top:0px;
    }
    /* 设置第一行的上边框样式 */
    .c_base_table tr:first-child th, .c_base_table tr:first-child td {
        border-top: 2px solid #4473c5; /* 设置上边框样式 */
    }

    /* 设置最后一行的下边框样式 */
    .c_base_table tr:last-child th, .c_base_table tr:last-child td {
        border-bottom: 2px solid #4473c5; /* 设置下边框样式 */
    }
</style>