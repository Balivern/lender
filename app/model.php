<?php

abstract class Model{
    private $host = "localhost";
    private $db_name = "lender";
    private $username = "root";
    private $password = "";

    protected $_connexion;

    public $table;

    public function getConnection(){
        $this->_connexion = null;

        try{
            $this->_connexion = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->_connexion->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Erreur de connexion : " . $exception->getMessage();
        }
    }

    public function getOne($id){
        $sql = "SELECT * FROM ".$this->table." WHERE id=".$id;
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        return $query->fetch();
    }

    public function getAll(){
        $sql = "SELECT * FROM ".$this->table;
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }

    public function getLastInsertId(){
        return $this->_connexion->lastInsertId();
    }
}

?>