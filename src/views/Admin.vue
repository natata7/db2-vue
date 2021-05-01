<template>
<div>
<Leftbar v-bind:signup='true'/>
  <main class="main main-left">
        <section class="admin-window">
            <table>
                <thead>
                    <td>First name</td>
                    <td>Last name</td>
                    <td>Country</td>
                    <td>Status</td>
                    <td>Level</td>
                    <td>E-mail</td>
                    <td></td>
                </thead>
                <tbody>
                    <tr v-for="row in usersResponse" :key="row">
                        <td>{{ row.fname }}</td>
                        <td>{{ row.lname }}</td>
                        <td>{{ row.country }}</td>
                        <td>{{ row.status }}</td>
                        <td>{{ row.level }}</td>
                        <td>{{ row.email }}</td>
                        <td>
                            <div class="delete-user" v-bind:id="row.id">
                                <a
                                v-bind:href="'/admin/' + row.id + '/delete/'" class="delete-link">
                                    <img src="<%= BASE_URL %>./public/images/delete.svg" alt="">
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
    </div>
</template>

<script>
// @ is an alias to /src
import Leftbar from '@/components/leftbar.vue';

export default {
  name: 'Admin',
  metaInfo: {
    title: 'Admin',
    titleTemplate: '%s | DB2 app',
  },
  props: {
    title: String,
  },
  components: {
    Leftbar,
  },
  mounted() {
    const externalScript = document.createElement('script');
    externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/jquery/latest/jquery.min.js');
    document.head.appendChild(externalScript);
  },
};
</script>

<style lang="scss" scoped>
.admin-window{
    background: $color-white;
    padding: 20px;
    margin: auto;
    min-width: 80%;
    min-height: 300px;

    @media (min-width: $screen-md) {
        padding: 45px;
        display: flex;
    }

    table{
        width: 100%;
        font-family: $main-font;
        border-collapse: collapse;
        border: 1px solid #DAE4F2;
        box-sizing: border-box;
        box-shadow: -2px 9px 8px rgba(23, 31, 76, 0.03);
        border-radius: 4px;
        font-size: $font-size--sm;

        thead{
            background: #F5F7FA;
            text-transform: uppercase;
            font-weight: 500;
            font-size: $font-size--xsm;
        }

        td{
            padding: 15px;
            font-weight: 300;
        }
    }
}
</style>
