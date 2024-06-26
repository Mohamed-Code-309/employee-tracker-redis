# nestjs-redis
implement APIs using different redis data structures

### How to run: 
- make sure to install nodejs on your machine https://nodejs.org/en/
- open the app in **VS Code** and run in terminal : ```npm install``` to install dependancies
- run in terminal ```npm start```
#

### APIs Summary :
  * **String APIS** :
    * _store string value_:
      * URL: ```http://localhost:3000/string```
      * Method : POST
      * Body example: ```
        {
        "key": "name",
        "value": "Hany"
        }```
    * _Get a Single String Value_:
      * URL: ```http://localhost:3000/string```
      * Method : GET
      * Query Params: `key`
    * _store string value with expiration time in seconds_:
      * URL: ```http://localhost:3000/string/expire```
      * Method : POST
      * Body example: ```
        {
        "key": "name",
        "value": "Hany",
        "expire": 10
        }```
    * _increment a string value by specific number ex: age key_:
      * URL: ```http://localhost:3000/string/incr```
      * Method : GET
    * _delete existing key_:
      * URL: ```http://localhost:3000/string/```
      * Method : DELETE
      * Query Params: `key`
  * **Hash APIS** :
    * _add multiple fields to a hash_:
      * URL: ```http://localhost:3000/hash```
      * Method : POST
      * Body example: 
        ```{
        "key": "employee",
        "object": {
                "name": "hany",
                "age": 23,
                "isMarried": false
            }
        }
        ```
    * _Get multiple field values from hash_:
      * URL: ```http://localhost:3000/hash```
      * Method : GET
      * Query Params: `key`
    * _get length of hash (number of fields exist in it)_:
      * URL: ```http://localhost:3000/hash/length```
      * Method : GET
      * Query Params: `key`
    * _delete existing Hash_:
      * URL: ```http://localhost:3000/string/```
      * Method : DELETE
      * Query Params: `key`
  * **List APIS** :
    * _insert item/s on the top of the list (left push)_:
      * URL: ```http://localhost:3000/list/lpush```
      * Method : POST
      * Query Params: `key` and `item`
    * _insert item/s on the bottom of the list (right push)_:
      * URL: ```http://localhost:3000/list/rpush```
      * Method : POST
      * Query Params: `key` and `item`
    * _get number of items on the list_:
      * URL: ```http://localhost:3000/list/length```
      * Method : GET
      * Query Params: `key`
    * _retrieve portion or the whole elements in the list_:
      * URL: ```http://localhost:3000/list/range```
      * Method : GET
      * Query Params: `key`
    * _remove item from the top of the list (head)_:
      * URL: ```http://localhost:3000/list/lpop```
      * Method : DELETE
      * Query Params: `key`
    * _remove item from the bottom of the list (tail)_:
      * URL: ```http://localhost:3000/list/rpop```
      * Method : DELETE
      * Query Params: `key`
  * **Sets APIS** :
    * _add memeber/s to a set_:
      * URL: ```http://localhost:3000/set```
      * Method : POST
      * Query Params: `key` and `item`
    * _list all set members_:
      * URL: ```http://localhost:3000/set```
      * Method : GET
      * Query Params: `key`
    * _return  random member_:
      * URL: ```http://localhost:3000/set/random```
      * Method : GET
      * Query Params: `key`
    * _get number of items on the set_:
      * URL: ```http://localhost:3000/set/length```
      * Method : GET
      * Query Params: `key`
    * _remove member/s from a set_:
      * URL: ```http://localhost:3000/set```
      * Method : DELETE
      * Query Params: `key` and `item`
  * **Sorted Sets APIS** :
    * _add member to a sorted set_:
      * URL: ```http://localhost:3000/sortedset```
      * Method : POST
      * Body example: ```
        {
        "key": "studenst_degrees",
        "score": 85,
        "value": "hany"
        }```
    * _list members of sorted set by their index_:
      * URL: ```http://localhost:3000/sortedset```
      * Method : GET
      * Query Params: `key`
    * _get individual score that is assigned to a value_:
      * URL: ```http://localhost:3000/set/sortedset/score```
      * Method : GET
      * Query Params: `key` and `item`
    * _remove member from set_:
      * URL: ```http://localhost:3000/sortedset```
      * Method : DELETE
      * Query Params: `key` and `item`
